'use client'
import { useConversation } from '@/hooks/conversation/use-conversation'
import React from 'react'
import TabsMenu from '../tabs/intex'
import { TABS_MENU } from '@/constants/menu'
import { TabsContent } from '../ui/tabs'
import ConversationSearch from './search'
import { Loader } from '../loader'
import ChatCard from './chat-card'
import { Inbox } from 'lucide-react'

type Props = {
  domains?:
    | {
        name: string
        id: string
        icon: string
      }[]
    | undefined
}

const ConversationMenu = ({ domains }: Props) => {
  const { register, chatRooms, loading, onGetActiveChatMessages } = useConversation()

  const empty = (
    <div className="mt-10 flex flex-col items-center gap-2 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40">
        <Inbox className="h-5 w-5 text-muted-foreground" />
      </div>
      <p className="text-sm font-medium text-foreground">No chats yet</p>
      <p className="max-w-[220px] text-xs text-muted-foreground">
        When customers chat with your AI on any domain, the conversation appears here.
      </p>
    </div>
  )

  return (
    <aside className="flex w-full max-w-sm flex-col gap-3 p-4">
      <div>
        <h1 className="font-display text-lg font-semibold">Conversations</h1>
        <p className="text-xs text-muted-foreground">Live chats across all your domains.</p>
      </div>
      <TabsMenu triggers={TABS_MENU}>
        <TabsContent value="unread">
          <div className="mt-3">
            <ConversationSearch domains={domains} register={register} />
          </div>
          <div className="mt-3 flex flex-1 flex-col gap-2 overflow-y-auto pr-1">
            <Loader loading={loading}>
              {chatRooms.length ? (
                chatRooms.map((room) => (
                  <ChatCard
                    seen={room.chatRoom[0].message[0]?.seen}
                    id={room.chatRoom[0].id}
                    onChat={() => onGetActiveChatMessages(room.chatRoom[0].id)}
                    createdAt={room.chatRoom[0].message[0]?.createdAt}
                    key={room.chatRoom[0].id}
                    title={room.email!}
                    description={room.chatRoom[0].message[0]?.message}
                  />
                ))
              ) : (
                empty
              )}
            </Loader>
          </div>
        </TabsContent>
        <TabsContent value="all">
          <div className="mt-6 text-center text-sm text-muted-foreground">
            All conversations will appear here.
          </div>
        </TabsContent>
        <TabsContent value="expired">
          <div className="mt-6 text-center text-sm text-muted-foreground">
            No expired conversations.
          </div>
        </TabsContent>
        <TabsContent value="starred">
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Star a conversation to find it here.
          </div>
        </TabsContent>
      </TabsMenu>
    </aside>
  )
}

export default ConversationMenu
