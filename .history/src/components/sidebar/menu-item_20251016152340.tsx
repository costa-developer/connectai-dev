import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  size: 'max'
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

  // Default active if current not passed
  const isActive =
    path && current
      ? current.replace(/^\/+/, '') === path.replace(/^\/+/, '')
      : true

  return (
    <Link
      onClick={onSignOut}
      href={path ? `/${path}` : '#'}
      className={cn(
        'flex items-center gap-2 px-3 py-2 rounded-lg my-1 transition-colors',
        isActive ? 'bg-white font-bold text-black' : 'text-gray-500 hover:bg-gray-100'
      )}
    >
      {IconCard} {label}
    </Link>
  )
}

export default MenuItem
