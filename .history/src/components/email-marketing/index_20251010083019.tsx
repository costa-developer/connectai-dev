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

  // Find the currently selected campaign object
  const selectedCampaign = campaign.find(camp => camp.id === campaignId)

  return (
    // Main container uses flex for a robust sidebar/main-content layout
    <div className="w-full h-full flex overflow-hidden bg-gray-50">
      
      {/* 1. Campaigns Sidebar */}
      <aside className="w-80 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col p-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Campaigns</h2>
        
        {/* Create Campaign Action (Primary CTA) */}
        <Modal
          title="Create a New Campaign"
          description="Define the name for your new marketing campaign."
          trigger={
            <Button className="w-full mb-4 group h-10 shadow-md">
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

        {/* Credits Status (Moved to a less intrusive, dedicated card) */}
        <Card className="p-3 mb-4 bg-yellow-50 border-yellow-200">
          <CardDescription className="font-semibold text-gray-700">
            Available Credits: <span className="text-lg font-extrabold text-orange-600">{subscription?.credits}</span>({subscription?.plan ?? 'Free Plan'})
            <Card className="px-4 py-2 rounded-lg shadow-sm border text-sm">
            <CardDescription>
              <span className="font-bold">{subscription?.credits ?? 0}</span>{' '}
              credits remaining ({subscription?.plan ?? 'Free Plan'})
            </CardDescription>
          </Card>
          </CardDescription>
        </Card>

        {/* Campaign List */}
        <div className="flex-1 overflow-y-auto space-y-2">
          {campaign.length === 0 && (
            <p className="text-sm text-gray-500 italic">No campaigns found. Create one to get started.</p>
          )}
          {campaign.map((camp) => (
            <div
              key={camp.id}
              className={cn(
                'p-3 rounded-lg cursor-pointer transition-all duration-200 border',
                camp.id === campaignId 
                  ? 'bg-blue-50 border-blue-400 shadow-md ring-2 ring-blue-300' 
                  : 'bg-white hover:bg-gray-100 border-gray-200'
              )}
              onClick={() => onSelectCampaign(camp.id)}
            >
              <Loader loading={processing}>
                <CardTitle className={cn(
                  'text-base font-semibold truncate',
                  camp.id === campaignId ? 'text-blue-700' : 'text-gray-800'
                )}>
                  {camp.name}
                </CardTitle>
                <div className="flex justify-between text-xs mt-1 text-gray-500">
                  <span className='flex items-center gap-1'>
                     <PersonIcon className="w-3 h-3"/> {camp.customers.length}
                  </span>
                  <span className='flex items-center gap-1'>
                    <CalIcon className="w-3 h-3"/> 
                    {getMonthName(camp.createdAt.getMonth())} {camp.createdAt.getDate()}
                  </span>
                </div>
              </Loader>
            </div>
          ))}
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col p-6 overflow-auto">
        
        {/* Top Campaign Details / Actions Header */}
        <div className="mb-6 pb-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {selectedCampaign ? `Campaign: ${selectedCampaign.name}` : 'Email Marketing Dashboard'}
          </h1>
          
          {selectedCampaign && (
            <div className="flex gap-3">
              {/* Primary Action: Send Bulk Email */}
              <Button
                variant="default"
                className="h-10 px-6 font-semibold"
                onClick={() => onBulkEmail(selectedCampaign.customers.map((c) => c), selectedCampaign.id)}
                disabled={selectedCampaign.customers.length === 0}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Bulk Email ({selectedCampaign.customers.length})
              </Button>

              {/* Secondary Action: Edit Email Template */}
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