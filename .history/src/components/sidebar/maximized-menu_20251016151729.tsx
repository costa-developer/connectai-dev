import { SIDE_BAR_MENU } from '@/constants/menu'
import { User, LogOut, Menu } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DomainMenu from './domain-menu'
import MenuItem from './menu-item'

type Props = {
  current: string
  onSignOut(): void
  domains:
    | {
        id: string
        name: string
        icon: string | null
      }[]
    | null
    | undefined
}

const MaxMenu = ({ current, domains, onSignOut }: Props) => {
  return (
    <div className="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
      {/* Logo */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="LOGO"
            width={30}
            height={30}
            className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          />
          <span className="text-black font-semibold text-lg animate-fade-in opacity-0 delay-300 fill-mode-forwards">
            CONNECT AI
          </span>
        </div>
        {/* <Menu className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards" /> */}
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />


      {/* Menu items */}
      <div className="flex flex-col justify-between h-full mt-">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem
              key={key}
              size="max"
              {...menu}
              current={current}
            />
          ))}
          <DomainMenu domains={domains} />
        </div>

        {/* Options */}
        <div className="flex flex-col mt-4">
          <p className="text-xs text-gray-500 mb-3">OPTIONS</p>
          <MenuItem
            size="max"
            label="Profile"
            path="profile"
            icon={<User className="text-blue-500" />}
            current={current}
          />
          <MenuItem
            size="max"
            label="Sign out"
            icon={<LogOut className="text-red-500" />}
            onSignOut={onSignOut}
          />
        </div>
      </div>
    </div>
  )
}

export default MaxMenu
