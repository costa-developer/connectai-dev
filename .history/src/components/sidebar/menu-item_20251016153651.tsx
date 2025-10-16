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
  const IconCard = (
    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400 shadow-soft-2xl text-white xl:p-2.5">
      {icon}
    </div>
  )

  switch (size) {
    case 'max':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            'flex items-center gap-2 px-1 py-2 rounded-lg my-1 text-sm opacity-100  ease-soft',
            !current
              ? 'text-gray-500'
              : current == path
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
          className={cn(
            !current
              ? 'text-gray-500'
              : current == path
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
