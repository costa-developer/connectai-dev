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
  const [sidebarOpen, setSidebarOpen] = useState(false) // for mobile toggle

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/auth/sign-in')
    }
  }, [isLoaded, isSignedIn, router])

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      fetchUserDomains(user.id).then(setDomains)
    }
  }, [isLoaded, isSignedIn, user])

  if (!isLoaded) return <div>Loading...</div>
  if (!isSignedIn || !user) return null

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <SideBar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main content */}
        <div
          className={`flex flex-col h-screen w-full bg-gray-50 transition-all duration-300
            md:ml-[250px]  /* offset for sidebar on md+ screens */
            p-4 md:p-8
          `}
        >
          {children}
        </div>
      </div>
    </ChatProvider>
  )
}

export default OwnerLayout
