'use client'
import { useChatWindow } from '@/hooks/conversation/use-conversation'
import React from 'react'
import { Loader } from '../loader'
import Bubble from '../chatbot/bubble'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { PaperclipIcon, Send, Phone, Video, Info } from 'lucide-react'
import Image from 'next/image'

type Props = {}

const MessengerHeader = () => (
  <div className="flex items-center justify-between p-3 border-b sticky top-0 bg-white z-10 shadow-sm">
    <div className="flex items-center space-x-3">
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
        <Image 
          src="/images/tendai.jpg" 
          alt="Contact Avatar" 
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-800">Jane Doe</span>
        <span className="text-xs text-gray-500">Active now</span>
      </div>
    </div>
    
    <div className="flex space-x-4 text-messenger-blue">
      <Phone className="w-5 h-5 cursor-pointer" />
      <Video className="w-5 h-5 cursor-pointer" />
      <Info className="w-5 h-5 cursor-pointer" />
    </div>
  </div>
);

const Messenger = (props: Props) => {
  const {
    messageWindowRef,
    chats,
    loading,
    chatRoom,
    onHandleSentMessage,
    register,
  } = useChatWindow()
  
  const messengerBlue = 'rgb(0, 132, 255)'; 

  return (
    <div className="flex-1 flex flex-col h-full bg-white max-h-screen">
      
      <MessengerHeader />

      {/* Chat Window */}
      <div className="flex-1 h-full w-full flex flex-col overflow-hidden">
        <Loader loading={loading}>
          <div
            ref={messageWindowRef}
            className="w-full flex-1 p-3 overflow-y-auto custom-scrollbar"
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
              <div className="text-center text-gray-500 mt-10">
                Start a conversation with Jane!
              </div>
            )}
          </div>
        </Loader>
      </div>
      <div className="p-2 border-t bg-white">
        <form
          onSubmit={onHandleSentMessage}
          className="flex items-center space-x-2 w-full"
        >
          <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
            <PaperclipIcon className='w-6 h-6' />
          </button>
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-1">
            <Input
              {...register('content')}
              placeholder="Aa"
              className="focus-visible:ring-0 flex-1 p-0 focus-visible:ring-offset-0 bg-gray-100 rounded-full outline-none border-none text-gray-800 placeholder-gray-500 h-8"
              autoComplete="off"
            />
            <div className="flex space-x-2 ml-2 text-gray-500">
            </div>
          </div>
          <Button
            type="submit"
            className="p-0 h-10 w-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: messengerBlue }}
            disabled={!chatRoom}
          >
            <Send className='w-5 h-5 text-white' />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Messenger