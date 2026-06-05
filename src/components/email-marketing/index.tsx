'use client'
import { useEmailMarketing } from '@/hooks/email-marketing/use-marketing'
import React from 'react'
import { CustomerTable } from './customer-table'
import { Button } from '../ui/button'
import { Plus, Send, Settings, Mail, Users, Calendar } from 'lucide-react'
import Modal from '../mondal'
import { Loader } from '../loader'
import FormGenerator from '../forms/form-generator'
import { cn, getMonthName } from '@/lib/utils'
import { EditEmail } from './edit-email'

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

const EmailMarketing = ({ campaign = [], domains, subscription }: Props) => {
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

  const selectedCampaign = campaign?.find((camp) => camp.id === campaignId)

  return (
    <div className="flex flex-1 w-full overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur">
      {/* Campaigns rail */}
      <aside className="flex w-80 flex-shrink-0 flex-col border-r border-border bg-background/30 p-5">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold">Campaigns</h2>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Build, target and send automated emails.
          </p>
        </div>

        <div className="mb-4 rounded-xl border border-border bg-background/40 p-3">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Available credits
          </p>
          <p className="font-display text-2xl font-bold text-foreground">
            {subscription?.credits ?? 0}
          </p>
          <p className="text-xs text-muted-foreground">{subscription?.plan ?? 'Free'} plan</p>
        </div>

        <Modal
          title="Create a new campaign"
          description="Give your campaign a memorable name."
          trigger={
            <Button className="mb-4 w-full gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="h-4 w-4" />
              New campaign
            </Button>
          }
        >
          <form className="flex flex-col gap-4" onSubmit={onCreateCampaign}>
            <FormGenerator
              name="name"
              register={register}
              errors={errors}
              inputType="input"
              placeholder="e.g. Q4 Holiday Promotion"
              type="text"
            />
            <Button className="w-full" disabled={loading} type="submit">
              <Loader loading={loading}>Save campaign</Loader>
            </Button>
          </form>
        </Modal>

        <div className="flex-1 space-y-2 overflow-y-auto pr-1">
          {campaign.length === 0 && (
            <p className="mt-4 text-center text-xs italic text-muted-foreground">
              No campaigns yet — create your first above.
            </p>
          )}
          {campaign.map((camp) => (
            <button
              key={camp.id}
              onClick={() => onSelectCampaign(camp.id)}
              className={cn(
                'w-full rounded-xl border p-3 text-left transition',
                camp.id === campaignId
                  ? 'border-primary/60 bg-primary/10 ring-1 ring-primary/30'
                  : 'border-border bg-background/30 hover:border-border/80 hover:bg-background/50'
              )}
            >
              <Loader loading={processing}>
                <p
                  className={cn(
                    'truncate text-sm font-semibold',
                    camp.id === campaignId ? 'text-foreground' : 'text-foreground/90'
                  )}
                >
                  {camp.name}
                </p>
                <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {camp.customers.length}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {getMonthName(camp.createdAt.getMonth())} {camp.createdAt.getDate()}
                  </span>
                </div>
              </Loader>
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex flex-1 flex-col overflow-hidden p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <div>
            <h1 className="font-display text-xl font-bold">
              {selectedCampaign ? selectedCampaign.name : 'Email marketing'}
            </h1>
            <p className="text-xs text-muted-foreground">
              {selectedCampaign
                ? `${selectedCampaign.customers.length} customer${selectedCampaign.customers.length !== 1 ? 's' : ''} in this campaign`
                : 'Pick a campaign or create a new one to start sending.'}
            </p>
          </div>
          {selectedCampaign && (
            <div className="flex gap-2">
              <Button
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() =>
                  onBulkEmail(
                    selectedCampaign.customers.map((c) => c),
                    selectedCampaign.id
                  )
                }
                disabled={selectedCampaign.customers.length === 0}
              >
                <Send className="h-4 w-4" />
                Send to {selectedCampaign.customers.length}
              </Button>
              <Modal
                title={`Edit template for ${selectedCampaign.name}`}
                description="This email is sent to everyone in the campaign."
                trigger={
                  <Button variant="outline" className="gap-2 border-border">
                    <Settings className="h-4 w-4" />
                    Edit template
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

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-sm font-semibold text-foreground/90">
              Your customers
            </h2>
            <Button
              size="sm"
              disabled={isSelected.length === 0 || !campaignId}
              onClick={onAddCustomersToCampaign}
              variant="secondary"
              className="gap-2"
            >
              <Plus className="h-3.5 w-3.5" />
              Add {isSelected.length} to campaign
            </Button>
          </div>
          <div className="flex-1 overflow-hidden rounded-xl border border-border bg-background/30">
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
