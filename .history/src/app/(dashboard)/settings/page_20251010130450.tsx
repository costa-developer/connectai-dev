import InfoBar from '@/components/infobar'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'
import DarkModetoggle from '@/components/settings/dark-mode'
import React from 'react'
import { onGetPaymentConnected } from '@/actions/settings'
import IntegrationsList from '@/components/integrations'

type Props = {}

const Page = async (props: Props) => {
  const payment = await onGetPaymentConnected()
  const connections = {
    stripe: payment ? true : false,
  }
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
        <IntegrationsList connections={connections} />
        <ChangePassword />
      </div>
    </>
  )
}

export default Page
