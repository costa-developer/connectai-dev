import InfoBar from '@/components/infobar'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'
import DomainMenu from '@/components/sidebar/domain-menu' // <-- import it
import React from 'react'

type Props = {
  domains: {
    id: string
    name: string
    icon: string | null
  }[]
}

const Page = ({ domains }: Props) => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
        <ChangePassword />

        {/* Add the domain menu here */}
        <DomainMenu domains={domains} min={false} />
      </div>
    </>
  )
}

export default Page
