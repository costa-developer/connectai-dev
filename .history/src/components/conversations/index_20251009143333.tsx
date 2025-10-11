'use client'
import { useConversation } from '@/hooks/conversation/use-conversation'
import React from 'react'
import TabsMenu from '../tabs/intex'
import { TABS_MENU } from '@/constants/menu'
import { TabsContent } from '../ui/tabs'
import ConversationSearch from './search'
import { Loader } from '../loader'
import ChatCard from './chat-card'
import { CardDescription } from '../ui/card'
import { Separator } from '../ui/separator'

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
  const { register, chatRooms, loading, onGetActiveChatMessages } =
    useConversation()

  return (
    <div className="p-4 flex flex-col h-full bg-white dark:bg-gray-900">
      <TabsMenu triggers={TABS_MENU}>
        {/* UNREAD CHATS */}
        <TabsContent value="unread">
          <ConversationSearch domains={domains} register={register} />
          <div className="flex-1 overflow-y-auto mt-2 flex flex-col gap-2">
            <Loader loading={loading}>
              {chatRooms.length ? (
                chatRooms.map((room) => (
                  <ChatCard
                    className="rounded-xl shadow-sm hover:shadow-md transition-shadow duration-150 cursor-pointer"
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
                <CardDescription className="text-center mt-4 text-gray-400 dark:text-gray-500">
                  No chats for your domain
                </CardDescription>
              )}
            </Loader>
          </div>
        </TabsContent>

        {/* ALL CHATS */}
        <TabsContent value="all">
          <div className="flex-1 overflow-y-auto flex flex-col gap-2 mt-2">
            <CardDescription className="text-gray-500 dark:text-gray-400">
              All chats coming soon
            </CardDescription>
          </div>
        </TabsContent>

        {/* EXPIRED CHATS */}
        <TabsContent value="expired">
          <div className="flex-1 overflow-y-auto flex flex-col gap-2 mt-2">
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Expired chats coming soon
            </CardDescription>
          </div>
        </TabsContent>

        {/* STARRED CHATS */}
        <TabsContent value="starred">
          <div className="flex-1 overflow-y-auto flex flex-col gap-2 mt-2">
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Starred chats coming soon
            </CardDescription>
          </div>
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default ConversationMenu
