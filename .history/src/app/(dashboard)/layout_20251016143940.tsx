'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import SideBar from '@/components/sidebar'
import { ChatProvider } from '@/context/user-chat-context'
import React, { useEffect, useState } from 'react'


type DomainType = {
  id: string
  name: string
  icon: string
}

type Props = {
  children: React.ReactNode
}

async function fetchUserDomains(userId: string): Promise<DomainType[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
    const res = await fetch(`${baseUrl}/api/domains?userId=${userId}`)
    if (!res.ok) {
      console.error('Failed to fetch domains:', res.statusText)
      return []
    }
    const data = await res.json()
    console.log('Fetched domains from API:', data)
    return data.domains || []
  } catch (err) {
    console.error('Error fetching domains:', err)
    return []
  }
}

const OwnerLayout = ({ children }: Props) => {
  const { isLoaded, isSignedIn, user } = useUser()
  const router = useRouter()
  const [domains, setDomains] = useState<DomainType[]>([])

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/auth/sign-in')
    }
  }, [isLoaded, isSignedIn, router])

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      console.log('Fetching domains for Clerk ID:', user.id)
      fetchUserDomains(user.id).then((data) => {
        console.log('Fetched domains from API:', data)
        setDomains(data)
      })
    }
  }, [isLoaded, isSignedIn, user])


  if (!isLoaded) return <div>Loading...</div>
  if (!isSignedIn || !user) return null

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        {/* <SideBar domains={domains} /> */}
        <SideBar  />
        <div className="w-full h-screen flex flex-col pl-20 md:p-8 bg-gray-50">
          {children}
        </div>
      </div>
    </ChatProvider>
  )
}

export default OwnerLayout
