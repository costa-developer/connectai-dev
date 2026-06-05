'use client'

import React from 'react'
import BreadCrumb from './bread-crumb'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Search, Bell } from 'lucide-react'
import { useUser } from '@clerk/nextjs'

const InfoBar = () => {
  const { user } = useUser()
  const initials = (user?.firstName?.[0] ?? '') + (user?.lastName?.[0] ?? '')

  return (
    <nav className="sticky top-0 z-40 flex w-full items-center justify-between gap-3 rounded-2xl border border-border bg-card/70 px-5 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <BreadCrumb />
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex relative w-72">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search domains, conversations, customers…"
            className="w-full rounded-lg border border-border bg-background/50 pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition"
          />
        </div>
        <button className="rounded-full border border-border bg-background/40 p-2 hover:bg-card transition" aria-label="Notifications">
          <Bell className="h-4 w-4 text-muted-foreground" />
        </button>
        <Avatar className="ring-1 ring-primary/30">
          <AvatarImage src={user?.imageUrl ?? '/images/tendai.jpg'} alt={user?.fullName ?? 'User'} />
          <AvatarFallback>{initials || 'U'}</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}

export default InfoBar
