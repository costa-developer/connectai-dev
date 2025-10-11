'use client'

import React from 'react'
import { useEmailMarketing } from '@/hooks/email-marketing/use-marketing'
import { CustomerTable } from './customer-table'
import { Button } from '../ui/button'
import { Plus, Send } from 'lucide-react'
import Modal from '../mondal'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full flex-1">
      {/* --- LEFT: CUSTOMER TABLE --- */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Customer List</h2>
        <Card className="shadow-sm border rounded-2xl overflow-hidden">
          <CustomerTable
            domains={domains}
            onId={onSetAnswersId}
            onSelect={onSelectedEmails}
            select={isSelected}
            id={isId}
          />
        </Card>
      </section>

      {/* --- RIGHT: CAMPAIGN MANAGEMENT --- */}
      <section className="flex flex-col">
        {/* --- HEADER ACTIONS --- */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
          <div className="flex gap-3">
            <Button
              variant="default"
              disabled={isSelected.length === 0}
              onClick={onAddCustomersToCampaign}
            >
              <Plus className="w-4 h-4 mr-2" /> Add to Campaign
            </Button>

            <Modal
              title="Create New Campaign"
              description="Organize your customers into a campaign"
              trigger={
                <Button variant="outline" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Create Campaign
                </Button>
              }
            >
              <form onSubmit={onCreateCampaign} className="space-y-4">
                <FormGenerator
                  name="name"
                  register={register}
                  errors={errors}
                  inputType="input"
                  placeholder="Campaign name"
                  type="text"
                />
                <Button className="w-full" disabled={loading} type="submit">
                  <Loader loading={loading}>Create Campaign</Loader>
                </Button>
              </form>
            </Modal>
          </div>

          {/* Subscription Info */}
          <Card className="px-4 py-2 rounded-lg shadow-sm border text-sm">
            <CardDescription>
              <span className="font-bold">{subscription?.credits ?? 0}</span>{' '}
              credits remaining ({subscription?.plan ?? 'Free Plan'})
            </CardDescription>
          </Card>
        </div>

        {/* --- CAMPAIGN LIST --- */}
        <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
          {campaign.length > 0 ? (
            campaign.map((camp, i) => (
              <Card
                key={camp.id}
                className={cn(
                  'transition-all duration-200 hover:shadow-md border rounded-2xl cursor-pointer p-5',
                  campaignId === camp.id ? 'bg-gray-50 border-gray-300' : 'bg-white'
                )}
                onClick={() => onSelectCampaign(camp.id)}
              >
                <Loader loading={processing}>
                  <CardContent className="p-0 flex flex-col gap-3">
                    {/* Meta */}
                    <div className="flex flex-wrap justify-between text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <CalIcon />
                        <span>
                          Created{' '}
                          {getMonthName(camp.createdAt.getMonth())}{' '}
                          {camp.createdAt.getDate()}th
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PersonIcon />
                        <span>{camp.customers.length} customers</span>
                      </div>
                    </div>

                    {/* Title + Actions */}
                    <div className="flex justify-between items-center flex-wrap gap-3">
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        {camp.name}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Modal
                          title="Edit Email Template"
                          description="Customize the email sent to this campaign’s members."
                          trigger={
                            <Button
                              variant="secondary"
                              className="rounded-lg font-medium"
                            >
                              Edit Email
                            </Button>
                          }
                        >
                          <EditEmail
                            register={registerEmail}
                            errors={emailErrors}
                            setDefault={setValue}
                            id={camp.id}
                            onCreate={onCreateEmailTemplate}
                          />
                        </Modal>
                        <Button
                          variant="default"
                          className="rounded-lg flex items-center gap-2"
                          onClick={() =>
                            onBulkEmail(
                              campaign[i].customers.map((c) => c),
                              camp.id
                            )
                          }
                        >
                          <Send className="w-4 h-4" /> Send
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Loader>
              </Card>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-gray-500">
              <p className="text-sm">No campaigns yet</p>
              <p className="text-xs">Create one to start your marketing journey.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default EmailMarketing
