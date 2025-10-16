'use client'

import React, { useState } from 'react'
import BreadCrumb from './bread-crumb'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Search, Settings, Menu, Sun, Moon, Laptop } from 'lucide-react'
import { useThemeMode } from '@/hooks/settings/use-settings'
import { cn } from '@/lib/utils'

type InfoBarProps = {
  onMobileMenuToggle(): void
}


const InfoBar = ({ onMobileMenuToggle }: InfoBarProps) => {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useThemeMode()

  const themes = [
    { name: 'system', icon: <Laptop /> },
    { name: 'light', icon: <Sun /> },
    { name: 'dark', icon: <Moon /> },
  ]

  return (
    <nav className="flex w-full items-center justify-between px-6 py-2 
                    sticky top-0 z-50 bg-white shadow-soft-xl rounded-2xl">
      <div className="flex items-center gap-3">
        <BreadCrumb />
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative w-64">
          <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 
                       focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition-all bg-white/20 backdrop-blur-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => setTheme(t.name)}
              className={cn(
                'p-2 rounded-full hover:bg-gray-100/20 transition',
                theme === t.name && 'bg-orange-100'
              )}
              title={`Switch to ${t.name} mode`}
            >
              {t.icon}
            </button>
          ))}
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100/20 transition">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100/20 transition"
          onClick={onMobileMenuToggle}
        >
          <Menu className="h-5 w-5 text-gray-600" />
        </button>

      </div>
    </nav>
  )
}

export default InfoBar
