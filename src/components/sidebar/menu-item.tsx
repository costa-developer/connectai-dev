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
  const isActive = !!(current && path && current === path)

  if (size === 'min') {
    return (
      <Link
        onClick={onSignOut}
        href={path ? `/${path}` : '#'}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-lg transition',
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
        )}
        title={label}
      >
        {icon}
      </Link>
    )
  }

  return (
    <Link
      onClick={onSignOut}
      href={path ? `/${path}` : '#'}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition',
        isActive
          ? 'bg-primary/15 text-foreground ring-1 ring-primary/40'
          : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
      )}
    >
      <span
        className={cn(
          'flex h-7 w-7 items-center justify-center rounded-md transition',
          isActive ? 'bg-primary text-primary-foreground' : 'bg-background/50 text-muted-foreground'
        )}
      >
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </Link>
  )
}

export default MenuItem
