'use client'

import React, { useState } from 'react'
import BreadCrumb from './bread-crumb'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Bell, Search, Settings, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const InfoBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="mb-4 flex w-full items-center justify-between px-6 py-2 bg-white rounded-2xl shadow-sm border border-gray-100 sticky top-0 z-50">
      {/* Left Section - Breadcrumb */}
      <div className="flex items-center gap-3">
        <BreadCrumb />
      </div>

      {/* Center Section - Search */}
      <div className="hidden md:flex relative w-64">
        <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition-all"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 bg-orange-500 text-white text-[10px] font-semibold px-1.5 rounded-full">
              3
            </span>
          </button>

          <div className="hidden  relative w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition-all"
            />
         </div>
        </div>

        {/* Settings */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>

        {/* User Avatar */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Mobile Menu */}
        <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </nav>
  )
}

export default InfoBar
