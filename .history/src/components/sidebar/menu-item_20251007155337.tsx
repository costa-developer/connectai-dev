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
  const isActive = current === pathtive
  const iconWithBg = (
    <div
      className={cn(
        'flex items-center justify-center p-2 rounded-lg',
        isActive
          ? 'bg-gradient-to-tr from-purple-700 to-pink-500 text-white'
          : 'bg-white text-gray-500'
      )}
    >
      {icon}
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
            'rounded-lg py-2 my-1 transition-colors',
            isActive ? 'bg-gradient-to-tr from-purple-700 to-pink-500 text-white' : 'text-gray-500 hover:bg-gray-100'
          )}
          href={path ? `/${path}` : '#'}
        >
          {icon}
        </Link>
      )
    default:
      return null
  }
}

export default MenuItem
