'use client'
import React, { useState } from 'react'
import {
  LayoutDashboard,
  Table,
  CreditCard,
  User,
  LogOut,
  Settings,
  UserPlus,
  Activity
} from 'lucide-react'
import { cn } from '@/lib/utils' // optional helper for conditional classNames

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Tables', icon: Table },
  { label: 'Billing', icon: CreditCard },
  { label: 'Virtual Reality', icon: Activity },
  { label: 'RTL', icon: Settings },
  { label: 'Profile', icon: User },
  { label: 'Sign In', icon: User },
  { label: 'Sign Up', icon: UserPlus },
]

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard')

  return (
    <aside
      className={cn(
        'fixed left-4 top-4 bottom-4 z-50',
        'w-64 rounded-2xl p-4',
        'bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg'
      )}
    >
      {/* Brand */}
      <div className="mb-8 flex items-center gap-2 px-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 text-white font-bold">
          D
        </span>
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-2">
        {menuItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200',
              active === label
                ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            )}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="my-4 border-t border-gray-200" />

      {/* Footer Actions */}
      <div className="mt-auto px-2">
        <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-red-500 transition-colors duration-150">
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
