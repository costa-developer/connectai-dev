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
    <div className="py-3 px-4 flex flex-col h-full w-[240px] ">
      {/* Logo */}
      <div className="flex justify-between items-center my-4 mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="LOGO"
            width={30}
            height={30}
            className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          />
          <span className="text-sm font-semibold transition-all duration-200 ease-nav-brand">
            CONNECT AI
          </span>
        </div>
        {/* <Menu className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards" /> */}
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-4" />


      {/* Menu items */}
      <div className="flex flex-col justify-between h-full my-4 mx-auto">
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

        <div className="mx-2 mt-4">
          <div className="relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 bg-white shadow-none overflow-hidden">
            <div
              className="absolute inset-0 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: "url('/images/white-curved.jpeg')" }}
            ></div>

            <div className="relative z-10 flex flex-col w-full p-4 text-left text-white">
              <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-lg bg-white shadow-soft-2xl">
                <i className="bg-gradient-to-tl from-slate-600 to-slate-300 bg-clip-text text-transparent text-lg opacity-80 ni ni-diamond"></i>
              </div>
              <div className="transition-all duration-200 ease-nav-brand">
                <h6 className="mb-0 text-white text-sm font-semibold">Need help?</h6>
                <p className="mt-0 mb-4 text-xs font-semibold leading-tight text-white/80">
                  Please check our docs
                </p>
                <a
                  href="#"
                  target="_blank"
                  className="inline-block w-full px-8 py-2 mb-0 text-xs font-bold text-center text-black uppercase rounded-lg bg-white shadow-soft-md transition-all ease-in hover:shadow-soft-2xl hover:scale-102"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>

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
