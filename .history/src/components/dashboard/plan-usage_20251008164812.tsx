import React from 'react'
import { ProgressBar } from '../progress'

type PlanUsageProps = {
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
  credits: number
  domains: number
  clients: number
}

export const PlanUsage = ({ plan, credits, domains, clients }: PlanUsageProps) => {
  const metrics = [
    {
      label: 'Email Credits',
      used: credits,
      limit: plan === 'STANDARD' ? 10 : plan === 'PRO' ? 50 : 500,
    },
    {
      label: 'Domains',
      used: domains,
      limit: plan === 'STANDARD' ? 1 : plan === 'PRO' ? 2 : 100,
    },
    {
      label: 'Contacts',
      used: clients,
      limit: plan === 'STANDARD' ? 10 : plan === 'PRO' ? 50 : 500,
    },
  ]

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full border border-gray-200 rounded-xl">
        <thead>
          <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
            <th className="p-3">Metric</th>
            <th className="p-3">Used</th>
            <th className="p-3">Limit</th>
            <th className="p-3 w-1/3">Progress</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => (
            <tr
              key={metric.label}
              className="border-t border-rounded-xl border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 font-medium">{metric.label}</td>
              <td className="p-3 text-gray-700">{metric.used}</td>
              <td className="p-3 text-gray-700">{metric.limit}</td>
              <td className="p-3">
                <ProgressBar
                  label=""
                  end={metric.limit}
                  credits={metric.used}
                  color="bg-gradient-to-tl from-blue-600 to-cyan-400 shadow-soft-md"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
