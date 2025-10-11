'use client'
import { useChatWindow } from '@/hooks/conversation/use-conversation'
import React from 'react'
import { Loader } from '../loader'
import Bubble from '../chatbot/bubble'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { PaperclipIcon } from 'lucide-react'

type Props = {}

const Messenger = (props: Props) => {
  const {
    messageWindowRef,
    chats,
    loading,
    chatRoom,
    onHandleSentMessage,
    register,
  } = useChatWindow()

  return (
    <div className="flex-1 flex flex-col h-full relative p-4">
      {/* Message Window */}
      <div className="flex-1 h-0 w-full flex flex-col overflow-y-auto">
        <Loader loading={loading}>
          <div
            ref={messageWindowRef}
            className="flex flex-col gap-3 overflow-y-auto"
          >
            {chats.length ? (
              chats.map((chat) => (
                <Bubble
                  key={chat.id}
                  message={{
                    role: chat.role!,
                    content: chat.message,
                  }}
                  createdAt={chat.createdAt}
                />
              ))
            ) : (
              <div className="text-center text-gray-400 mt-4">No Chat Selected</div>
            )}
          </div>
        </Loader>
      </div>

      {/* Message Input */}
      <form
        onSubmit={onHandleSentMessage}
        className="flex items-center gap-2 mt-3 p-2 rounded-3xl bg-gray-100"
      >
        <span className="text-gray-400">
          <PaperclipIcon className="w-5 h-5" />
        </span>
        <Input
          {...register('content')}
          placeholder="Type your message..."
          className="flex-1 border-none bg-gray-100 focus:ring-0 focus:outline-none"
        />
        <Button type="submit" disabled={!chatRoom} className="px-4 py-2">
          Send
        </Button>
      </form>
    </div>
  )
}

export default Messenger
