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

        <div className="mx-4">
          <p className="invisible hidden text-gray-800 text-red-500 text-red-600 after:bg-gradient-to-tl after:from-gray-900 after:to-slate-800 after:bg-gradient-to-tl after:from-blue-600 after:to-cyan-400 after:bg-gradient-to-tl after:from-red-500 after:to-yellow-400 after:bg-gradient-to-tl after:from-green-600 after:to-lime-400 after:bg-gradient-to-tl after:from-red-600 after:to-rose-400 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 text-lime-500 text-cyan-500 text-slate-400 text-fuchsia-500"></p>
          <div className="after:opacity-65 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']" sidenav-card>
          <div
  className="mb-7.5 absolute h-full w-full rounded-2xl bg-cover bg-center"
  style={{ backgroundImage: "url('/images/white-curved.jpeg')" }}
>
            <div className="relative z-20 flex-auto w-full p-4 text-left text-white">
              <div className="flex items-center justify-center w-8 h-8 mb-4 text-center bg-white bg-center rounded-lg icon shadow-soft-2xl">
                <i className="top-0 z-10 text-transparent ni leading-none ni-diamond text-lg bg-gradient-to-tl from-slate-600 to-slate-300 bg-clip-text opacity-80" sidenav-card-icon></i>
              </div>
              <div className="transition-all duration-200 ease-nav-brand">
                <h6 className="mb-0 text-white">Need help?</h6>
                <p className="mt-0 mb-4 font-semibold leading-tight text-xs">Please check our docs</p>
                <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/" target="_blank" className="inline-block w-full px-8 py-2 mb-0 font-bold text-center text-black uppercase transition-all ease-in bg-white border-0 border-white rounded-lg shadow-soft-md bg-150 leading-pro text-xs hover:shadow-soft-2xl hover:scale-102">Documentation</a>
              </div>
            </div>
          </div>
          <a className="inline-block w-full px-6 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102" target="_blank" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind?ref=sidebarfree">Upgrade to pro</a>
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
