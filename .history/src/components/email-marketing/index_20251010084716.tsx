'use client'
import { useEmailMarketing } from '@/hooks/email-marketing/use-marketing'
import React from 'react'
import { CustomerTable } from './customer-table'
import { Button } from '../ui/button'
import { Plus, Send, Settings } from 'lucide-react'
import Modal from '../mondal'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import { Loader } from '../loader'
import FormGenerator from '../forms/form-generator'
import { cn, getMonthName } from '@/lib/utils'
import CalIcon from '@/icons/cal-icon' // Assuming these are standard icon components
import PersonIcon from '@/icons/person-icon' // Assuming these are standard icon components
import { EditEmail } from './edit-email'

// --- Types remain the same ---
type Props = {
  domains: {
    customer: {
      Domain: {
        name: string
      } | null
      id: string
      email: string | null
    }[]
  }[]
  campaign: {
    name: string
    id: string
    customers: string[]
    createdAt: Date
  }[]
  subscription: {
    plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
    credits: number
  } | null
}

const EmailMarketing = ({ campaign, domains, subscription }: Props) => {
  const {
    onSelectedEmails,
    isSelected,
    onCreateCampaign,
    register,
    errors,
    loading,
    onSelectCampaign,
    processing,
    onAddCustomersToCampaign,
    campaignId,
    onBulkEmail,
    onSetAnswersId,
    isId,
    registerEmail,
    emailErrors,
    onCreateEmailTemplate,
    setValue,
  } = useEmailMarketing()
  const selectedCampaign = campaign.find(camp => camp.id === campaignId)

  return (
    <div className="w-full h-full flex overflow-hidden bg-white mt-8 rounded-2xl border-0 border-solid">
      <aside className="w-80 flex-shrink-0 bg-slate-800 border-r border-slate-700 flex flex-col p-4 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-slate-100 tracking-tight">
          Campaigns
        </h2>
        <h3  className="p-3 mb-4 ">
          <CardDescription className="font-medium text-slate-200">
            Available Credits:{' '}
            <span className="text-lg font-bold text-orange-400">
              {subscription?.credits ?? 0}
            </span>{' '}
            <span className="text-sm text-slate-400">
              ({subscription?.plan ?? 'Free Plan'})
            </span>
          </CardDescription>
        </h3>
        <Modal
          title="Create a New Campaign"
          description="Define the name for your new marketing campaign."
          trigger={
            <Button className="w-full mb-4 h-10 bg-slate-500 hover:bg-blue-500 text-white font-medium rounded-lg shadow-md flex items-center justify-center gap-2" >
              <Plus className="w-4 h-4" />
              Create New Campaign
            </Button>
          }
        >
          <form className="flex flex-col gap-4" onSubmit={onCreateCampaign}>
            <FormGenerator
              name="name"
              register={register}
              errors={errors}
              inputType="input"
              placeholder="e.g., 'Q4 Holiday Promotion'"
              type="text"
            />
            <Button className="w-full" disabled={loading} type="submit">
              <Loader loading={loading}>Save Campaign</Loader>
            </Button>
          </form>
        </Modal>
        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          {campaign.length === 0 && (
            <p className="text-sm text-slate-400 italic text-center mt-4">
              No campaigns found. Create one to get started.
            </p>
          )}

          {campaign.map((camp) => (
            <div
              key={camp.id}
              className={cn(
                'p-3 rounded-lg cursor-pointer transition-all duration-200 border flex flex-col gap-1',
                camp.id === campaignId
                  ? 'bg-slate-700 border-blue-500 ring-2 ring-blue-500/50 shadow-md'
                  : 'bg-slate-700/30 hover:bg-slate-700 border-slate-600 hover:border-slate-500'
              )}
              onClick={() => onSelectCampaign(camp.id)}
            >
              <Loader loading={processing}>
                <CardTitle
                  className={cn(
                    'text-sm font-semibold truncate',
                    camp.id === campaignId ? 'text-blue-300' : 'text-slate-100'
                  )}
                >
                  {camp.name}
                </CardTitle>

                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <PersonIcon className="w-3 h-3 text-slate-400" />
                    {camp.customers.length}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalIcon className="w-3 h-3 text-slate-400" />
                    {getMonthName(camp.createdAt.getMonth())}{' '}
                    {camp.createdAt.getDate()}
                  </span>
                </div>
              </Loader>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col p-6 overflow-auto">
        <div className="mb-6 pb-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {selectedCampaign ? `Campaign: ${selectedCampaign.name}` : 'Email Marketing Dashboard'}
          </h1>
          
          {selectedCampaign && (
            <div className="flex gap-3">
              <Button
                variant="default"
                className="h-10 px-6 font-semibold"
                onClick={() => onBulkEmail(selectedCampaign.customers.map((c) => c), selectedCampaign.id)}
                disabled={selectedCampaign.customers.length === 0}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Bulk Email ({selectedCampaign.customers.length})
              </Button>
              <Modal
                title={`Edit Template for: ${selectedCampaign.name}`}
                description="This email will be sent to all campaign members."
                trigger={
                  <Button variant="outline" className="h-10 px-4">
                    <Settings className="w-4 h-4 mr-2"/>
                    Edit Email Template
                  </Button>
                }
              >
                <EditEmail
                  register={registerEmail}
                  errors={emailErrors}
                  setDefault={setValue}
                  id={selectedCampaign.id}
                  onCreate={onCreateEmailTemplate}
                />
              </Modal>
            </div>
          )}
        </div>

        {/* Customer Management Section */}
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Customer List</h2>
            
            {/* Action for selected customers: Add to Campaign */}
            <Button
              disabled={isSelected.length === 0 || !campaignId} // Requires selection AND active campaign
              onClick={onAddCustomersToCampaign}
              variant="secondary"
            >
              <Plus className="w-4 h-4 mr-2" /> 
              Add Selected ({isSelected.length}) to Campaign
            </Button>
          </div>
          
          {/* Customer Table Component */}
          <div className="flex-1 overflow-hidden rounded-lg border shadow-sm bg-white">
            <CustomerTable
              domains={domains}
              onId={onSetAnswersId}
              onSelect={onSelectedEmails}
              select={isSelected}
              id={isId}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default EmailMarketing