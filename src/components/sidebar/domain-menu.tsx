'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Globe } from 'lucide-react'

type Props = {
  min?: boolean
  domains:
    | {
        id: string
        name: string
        icon: string | null
      }[]
    | null
    | undefined
}

const DomainMenu = ({ domains, min }: Props) => {
  if (!domains || domains.length === 0) return null

  return (
    <ul className={cn('flex flex-col gap-1', min && 'items-center')}>
      {domains.map((domain) => (
        <li key={domain.id}>
          <Link
            href={`/settings/${domain.name.split('.')[0]}`}
            className={cn(
              'flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted/40 hover:text-foreground transition',
              min && 'justify-center px-0'
            )}
            title={domain.name}
          >
            {domain.icon ? (
              <Image
                src={`https://ucarecdn.com/${domain.icon}/`}
                alt={domain.name}
                width={18}
                height={18}
                className="rounded"
              />
            ) : (
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded bg-primary/20 text-primary">
                <Globe className="h-3 w-3" />
              </span>
            )}
            {!min && <span className="truncate">{domain.name}</span>}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DomainMenu
