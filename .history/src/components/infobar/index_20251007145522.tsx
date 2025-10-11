'use client'

import React, { useState } from 'react'
import BreadCrumb from './bread-crumb'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Search, Settings, Menu } from 'lucide-react'

const InfoBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="mb-8 flex w-full items-center justify-between px-6 py-2 
                    bg-white/30 backdrop-blur-md border border-white/40 
                    rounded-2xl shadow-sm sticky top-0 z-50">
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

        <button className="p-2 rounded-full hover:bg-gray-100/20 transition">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <button className="md:hidden p-2 rounded-full hover:bg-gray-100/20 transition">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </nav>
  )
}

export default InfoBar
