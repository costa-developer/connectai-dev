import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversations'
import Messenger from '@/components/conversations/messenger'
import InfoBar from '@/components/infobar'
import React from 'react'

type Props = {}

const ConversationPage = async (props: Props) => {
  const domains = await onGetAllAccountDomains()
  return (
    <>
      <InfoBar />
      <div className="flex flex-1 w-full overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur">
        <ConversationMenu domains={domains?.domains} />
        <div className="hidden md:block w-px bg-border/60" />
        <div className="flex flex-1 flex-col">
          <Messenger />
        </div>
      </div>
    </>
  )
}

export default ConversationPage
