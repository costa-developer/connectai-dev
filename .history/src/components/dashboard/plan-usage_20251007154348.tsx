import React from 'react'
import { ProgressBar } from '../progress'

type PlanUsageProps = {
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
  credits: number
  domains: number
  clients: number
}

export const PlanUsage = ({
  plan,
  credits,
  domains,
  clients,
}: PlanUsageProps) => {
  console.log(credits)
  return (
    <div className="flex flex-col gap-5 py-5">
      <ProgressBar
        end={plan == 'STANDARD' ? 10 : plan == 'PRO' ? 50 : 500}
        label="Email Credits"
        credits={credits}
        color="bg-green-500"
      />
      <ProgressBar
        end={plan == 'STANDARD' ? 1 : plan == 'PRO' ? 2 : 100}
        label="Domains"
        credits={domains}
        color="bg-red-500"
      />
      <ProgressBar
        end={plan == 'STANDARD' ? 10 : plan == 'PRO' ? 50 : 500}
        label="Contacts"
        credits={clients}
        color="bg-yellow-500"
      />
    </div>
  )
}
