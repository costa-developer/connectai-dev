'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  size: 'max' | 'min'
  label: string
  icon: JSX.Element
  path?: string
  current?: string
  onSignOut?(): void
}

const MenuItem = ({ size, path, icon, label, current, onSignOut }: Props) => {
  const isActive = current && path && current === path
  const baseIconClasses =
    'mr-2 flex h-8 w-8 items-center justify-center rounded-lg shadow-soft-2xl xl:p-2.5'

  // 1. Icon Wrapper Styling: Set the icon wrapper's background to white when active.
  const iconBackgroundAndColor = isActive
    ? 
      'bg-white' // White background for the wrapper
    : 
      'bg-white text-gray-700' // White background, gray text for inactive

  // 2. Icon Content (for Gradient): Apply the text-gradient to the icon itself when active.
  const iconContent = (
    <span 
      className={cn(
        'flex items-center justify-center h-full w-full',
        isActive 
          // Apply text gradient when active
          ? 'bg-clip-text text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400' 
          : 'text-gray-700'
      )}
    >
      {icon}
    </span>
  )

  const IconCard = (
    <div className={cn(baseIconClasses, iconBackgroundAndColor)}>
      {iconContent}
    </div>
  )

  switch (size) {
    case 'max':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            'flex items-center gap-2 px-1 py-2 rounded-lg my-1 text-sm opacity-100 ease-soft',
            !current
              ? 'text-gray-500'
              : isActive 
              ? 'bg-white font-bold text-black shadow-lg' // Active Menu Item Style: White BG
              : 'text-gray-500'
          )}
          href={path ? `/${path}` : '#'}
        >
          {IconCard} {label}
        </Link>
      )
    case 'min':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            !current
              ? 'text-gray-500'
              : isActive 
              ? 'bg-white font-bold text-black shadow-lg' // Active Menu Item Style: White BG
              : 'text-gray-500',
            'rounded-lg py-2 my-1 flex items-center justify-center'
          )}
          href={path ? `/${path}` : '#'}
        >
          {IconCard}
        </Link>
      )
    default:
      return null
  }
}

export default MenuItem