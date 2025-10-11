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
  const isActive = current === path

  // Wrap the icon in a div to apply gradient background when active
  const iconWithBg = (
    <div
      className={cn(
        'flex items-center justify-center p-1 rounded-lg',
        isActive
          ? 'bg-gradient-to-tr from-purple-700 to-pink-500 text-white'
          : 'bg-white text-gray-500'
      )}
    >
      {React.cloneElement(icon, { className: cn(icon.props.className, 'w-4 h-4', isActive && 'text-white') })}
    </div>
  )

  switch (size) {
    case 'max':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            'flex items-center gap-2 px-2 py-2 rounded-lg my-1 transition-colors',
            isActive ? 'font-bold text-black' : 'text-gray-500 hover:bg-gray-100'
          )}
          href={path ? `/${path}` : '#'}
        >
          {iconWithBg} {label}
        </Link>
      )
    case 'min':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            'rounded-lg py-2 my-1 flex items-center justify-center transition-colors',
            isActive ? 'bg-gradient-to-tr from-purple-700 to-pink-500' : 'text-gray-500 hover:bg-gray-100'
          )}
          href={path ? `/${path}` : '#'}
        >
          {React.cloneElement(icon, { className: cn(icon.props.className, 'w-4 h-4', isActive && 'text-white') })}
        </Link>
      )
    default:
      return null
  }
}

export default MenuItem
