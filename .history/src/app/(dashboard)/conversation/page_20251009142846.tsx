import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversations'
import Messenger from '@/components/conversations/messenger'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

const ConversationPage = async (props: Props) => {
  const domains = await onGetAllAccountDomains()
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col p-4">
      <InfoBar />

      <div className="flex flex-1 mt-4 gap-4 h-full">
        {/* Chat List */}
        <div className="flex-shrink-0 w-96 bg-white rounded-3xl shadow flex flex-col">
          <ConversationMenu domains={domains?.domains} />
        </div>

        <Separator orientation="vertical" className="h-full" />

        {/* Messenger */}
        <div className="flex-1 flex flex-col bg-white rounded-3xl shadow">
          <Messenger />
        </div>
      </div>
    </div>
  )
}

export default ConversationPage
