'use client'
import useSideBar from '@/context/use-sidebar'
import { cn } from '@/lib/utils'
import React from 'react'
import MaxMenu from './maximized-menu'

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
  const { page, onSignOut } = useSideBar()

  return (
    <div className="bg-gray-50 dark:bg-neutral-950 h-full w-[240px] fixed md:relative">
      <MaxMenu
        domains={domains}
        current={page!}
        onSignOut={onSignOut}
      />
    </div>
  )
}

export default SideBar
