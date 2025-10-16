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
type SideBarProps = {
  domains: { id: string; name: string; icon: string | null }[] | null | undefined
  isOpen?: boolean // mobile toggle
  onClose?: () => void
}

const SideBar = ({ domains, isOpen = false, onClose }: SideBarProps) => {
  return (
    <>
      {/* Desktop sidebar */}
      <div className="bg-gray-50 dark:bg-neutral-950 h-full w-[240px] fixed hidden md:flex">
        <MaxMenu domains={domains} current="" onSignOut={() => {}} />
      </div>

      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/30"
            onClick={onClose} // close on overlay click
          />
          <div className="bg-gray-50 dark:bg-neutral-950 w-64 h-full shadow-lg">
            <MaxMenu domains={domains} current="" onSignOut={onClose} />
          </div>
        </div>
      )}
    </>
  )
}


export default SideBar
