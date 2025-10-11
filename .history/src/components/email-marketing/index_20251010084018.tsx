'use client'
import { useEmailMarketing } from '@/hooks/email-marketing/use-marketing'
import React from 'react'
import { CustomerTable } from './customer-table'
import { Button } from '../ui/button'
import { Plus, Send, Settings } from 'lucide-react'
import Modal from '../mondal'
import { Card, CardDescription, CardTitle } from '../ui/card'
import { Loader } from '../loader'
import FormGenerator from '../forms/form-generator'
import { cn, getMonthName } from '@/lib/utils'
import CalIcon from '@/icons/cal-icon'
import PersonIcon from '@/icons/person-icon'
import { EditEmail } from './edit-email'

type Props = {
  domains: {
    customer: {
      Domain: { name: string } | null
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

  const selectedCampaign = campaign.find((camp) => camp.id === campaignId)

  return (
    <div className="w-full h-full flex overflow-hidden bg-white mt-8 rounded-2xl border-0">
      <aside className="w-80 flex-shrink-0 flex flex-col p-5 shadow-xl bg-gradient-to-b from-blue-700 via-blue-600 to-cyan-500">
        <h2 className="text-2xl font-bold mb-4 text-white tracking-tight drop-shadow-sm">
          Campaigns
        </h2>
        <Modal
          title="Create a New Campaign"
          description="Define the name for your new marketing campaign."
          trigger={
            <Button
              className="w-full mb-4 h-11 text-white font-bold uppercase tracking-wide rounded-lg shadow-md transition-all duration-200 
              bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-105 hover:shadow-lg active:opacity-85"
            >
              <Plus className="w-4 h-4 mr-2" />
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
        <Card className="p-3 mb-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm shadow-sm">
          <CardDescription className="text-white/90 font-medium">
            Credits:{' '}
            <span className="text-lg font-bold text-cyan-200">
              {subscription?.credits ?? 0}
            </span>{' '}
            <span className="text-sm text-white/70">
              ({subscription?.plan ?? 'Free Plan'})
            </span>
          </CardDescription>
        </Card>
        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-blue-400/40 scrollbar-track-transparent">
          {campaign.length === 0 && (
            <p className="text-sm text-white/80 italic text-center mt-4">
              No campaigns found. Create one to get started.
            </p>
          )}

          {campaign.map((camp) => (
            <div
              key={camp.id}
              className={cn(
                'p-3 rounded-lg cursor-pointer transition-all duration-300 border flex flex-col gap-1 shadow-sm',
                camp.id === campaignId
                  ? 'bg-gradient-to-tl from-cyan-400/80 to-blue-500/90 border-transparent ring-2 ring-white/40 shadow-lg scale-[1.02]'
                  : 'bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/30'
              )}
              onClick={() => onSelectCampaign(camp.id)}
            >
              <Loader loading={processing}>
                <CardTitle
                  className={cn(
                    'text-sm font-semibold truncate',
                    camp.id === campaignId
                      ? 'text-white drop-shadow-sm'
                      : 'text-white/90'
                  )}
                >
                  {camp.name}
                </CardTitle>

                <div
                  className={cn(
                    'flex justify-between text-xs mt-1',
                    camp.id === campaignId
                      ? 'text-white/80'
                      : 'text-white/70'
                  )}
                >
                  <span className="flex items-center gap-1">
                    <PersonIcon className="w-3 h-3" />
                    {camp.customers.length}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalIcon className="w-3 h-3" />
                    {getMonthName(camp.createdAt.getMonth())}{' '}
                    {camp.createdAt.getDate()}
                  </span>
                </div>
              </Loader>
            </div>
          ))}
        </div>
      </aside>

      {/* --- MAIN PANEL --- */}
      <main className="flex-1 flex flex-col p-8 overflow-auto bg-white">
        <div className="mb-6 pb-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {selectedCampaign
              ? `Campaign: ${selectedCampaign.name}`
              : 'Email Marketing Dashboard'}
          </h1>

          {selectedCampaign && (
            <div className="flex gap-3">
              <Button
                variant="default"
                className="h-10 px-6 font-semibold bg-gradient-to-tl from-blue-600 to-cyan-400 text-white hover:scale-105 transition-transform"
                onClick={() =>
                  onBulkEmail(
                    selectedCampaign.customers.map((c) => c),
                    selectedCampaign.id
                  )
                }
                disabled={selectedCampaign.customers.length === 0}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Bulk Email ({selectedCampaign.customers.length})
              </Button>

              <Modal
                title={`Edit Template for: ${selectedCampaign.name}`}
                description="This email will be sent to all campaign members."
                trigger={
                  <Button
                    variant="outline"
                    className="h-10 px-4 border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Template
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

        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Customer List
            </h2>

            <Button
              disabled={isSelected.length === 0 || !campaignId}
              onClick={onAddCustomersToCampaign}
              variant="secondary"
              className="border border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Selected ({isSelected.length}) to Campaign
            </Button>
          </div>

          <div className="flex-1 overflow-hidden rounded-xl border shadow-sm bg-white">
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
