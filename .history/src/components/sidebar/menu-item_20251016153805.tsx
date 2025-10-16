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
  // 1. Determine if the current path is active
  const isActive = current && path && current === path

  // 2. Define the base classes for the icon container
  const baseIconClasses =
    'mr-2 flex h-8 w-8 items-center justify-center rounded-lg shadow-soft-2xl xl:p-2.5'

  // 3. Conditionally apply the background and text color classes
  const iconBackgroundAndColor = isActive
    ? // Active state: Gradient background and white text
      'bg-gradient-to-tl from-blue-600 to-cyan-400 text-white'
    : // Inactive state: White background and a suitable text color (e.g., black or gray-700)
      'bg-white text-gray-700' // Changed text to gray-700 so the icon is visible on white background

  const IconCard = (
    <div className={cn(baseIconClasses, iconBackgroundAndColor)}>
      {icon}
    </div>
  )

  switch (size) {
    case 'max':
      return (
        <Link
          onClick={onSignOut}
          // The link's active state classes remain the same as you had them
          className={cn(
            'flex items-center gap-2 px-1 py-2 rounded-lg my-1 text-sm opacity-100  ease-soft',
            !current
              ? 'text-gray-500'
              : isActive // Use the 'isActive' boolean here for clarity
              ? 'bg-white font-bold text-black'
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
          // The link's active state classes remain the same as you had them
          className={cn(
            !current
              ? 'text-gray-500'
              : isActive // Use the 'isActive' boolean here for clarity
              ? 'bg-white font-bold text-black'
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