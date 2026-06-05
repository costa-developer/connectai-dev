'use client'

import { SIDE_BAR_MENU } from '@/constants/menu'
import { User, LogOut, Sparkles, Globe } from 'lucide-react'
import React from 'react'
import DomainMenu from './domain-menu'
import MenuItem from './menu-item'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {
  current: string
  onSignOut(): void
  domains:
    | {
        id: string
        name: string
        icon: string | null
      }[]
    | null
    | undefined
}

const MaxMenu = ({ onSignOut, domains }: Props) => {
  const pathname = usePathname() || ''
  const current = pathname.split('/')[1] || ''

  return (
    <div className="flex h-full w-full flex-col gap-4 px-4 py-5">
      {/* Brand */}
      <Link href="/dashboard" className="flex items-center gap-2 px-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary ring-1 ring-primary/40">
          <Sparkles className="h-4 w-4" />
        </span>
        <span className="font-display text-base font-semibold tracking-tight text-foreground">
          Connect AI
        </span>
      </Link>

      <div className="h-px bg-border/60" />

      {/* Nav */}
      <div className="flex flex-1 flex-col gap-1 overflow-y-auto pr-1">
        <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Menu
        </p>
        {SIDE_BAR_MENU.map((menu, key) => (
          <MenuItem key={key} size="max" {...menu} current={current} />
        ))}

        {/* Domains */}
        <div className="mt-4 rounded-xl border border-border bg-background/30 p-3">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Globe className="h-3 w-3" />
            Your Domains
            {domains && (
              <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                {domains.length}
              </span>
            )}
          </div>
          {domains && domains.length > 0 ? (
            <DomainMenu domains={domains} />
          ) : (
            <Link
              href="/settings"
              className="block rounded-lg border border-dashed border-border/80 px-3 py-2 text-center text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground transition"
            >
              + Add your first domain
            </Link>
          )}
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex flex-col gap-1 border-t border-border/60 pt-3">
        <MenuItem
          size="max"
          label="Profile"
          path="profile"
          icon={<User className="h-4 w-4" />}
          current={current}
        />
        <MenuItem
          size="max"
          label="Sign out"
          icon={<LogOut className="h-4 w-4" />}
          onSignOut={onSignOut}
        />
      </div>
    </div>
  )
}

export default MaxMenu
