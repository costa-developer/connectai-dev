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
  return (
    <div className={cn('flex flex-col gap-3', min ? 'mt-6' : 'mt-3')}>
      {!min && (
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
          <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-tl from-blue-600 to-cyan-400 rounded-sm">
            <Globe className="w-3 h-3 text-white" />
          </div>
          <span>DOMAINS</span>
        </div>
      )}

      {/* List of domains */}
      <div className="flex flex-col gap-1 text-ironside font-medium">
        {domains &&
          domains.map((domain) => (
            <Link
              href={`/settings/${domain.name.split('.')[0]}`}
              key={domain.id}
              className={cn(
                'flex gap-3 hover:bg-white rounded-full transition duration-100 ease-in-out cursor-pointer ',
                !min ? 'p-2' : 'py-2'
              )}
            >
              <Image
                src={`https://ucarecdn.com/${domain.icon}/`}
                alt="logo"
                width={20}
                height={20}
              />
              {!min && <p className="text-sm">{domain.name}</p>}
            </Link>
          ))}
      </div>
    </div>
  )
}

export default DomainMenu
