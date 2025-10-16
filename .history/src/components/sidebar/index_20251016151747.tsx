'use client'
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
  return (
    <div className="bg-gray-50 dark:bg-neutral-950 h-full w-[240px] fixed md:relative hidden md:flex">
      <MaxMenu
        domains={domains}
        current=""
        onSignOut={() => {}}
      />
    </div>
  )
}

export default SideBar
