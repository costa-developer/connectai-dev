'use client'
import React from 'react'
import MaxMenu from './maximized-menu'
import useSideBar from '@/context/use-sidebar'

type Props = {
  domains:
    | {
        id: string
        name: string
        icon: string
      }[]
    | null
    | undefined
}

const SideBar = ({ domains }: Props) => {
  const { onSignOut } = useSideBar()
  return (
    <aside className="hidden md:flex h-screen w-[260px] flex-shrink-0 border-r border-border bg-card/40 backdrop-blur-xl">
      <MaxMenu domains={domains} current="" onSignOut={onSignOut} />
    </aside>
  )
}

export default SideBar
