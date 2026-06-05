'use client'
import { useAuthContextHook } from '@/context/use-auth-context'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import React from 'react'

const STEPS = [
  { id: 1, label: 'Account type' },
  { id: 2, label: 'Your details' },
  { id: 3, label: 'Verify email' },
]

const HighLightBar = () => {
  const { currentStep } = useAuthContextHook()

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {STEPS.map((step) => {
          const isDone = step.id < currentStep
          const isActive = step.id === currentStep
          return (
            <div key={step.id} className="flex flex-col gap-2">
              <div
                className={cn(
                  'h-1.5 w-full rounded-full transition-all duration-300',
                  isDone || isActive
                    ? 'bg-gradient-to-tl from-blue-600 to-cyan-400 shadow-soft-md'
                    : 'bg-slate-200'
                )}
              />
              <div
                className={cn(
                  'flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide',
                  isActive
                    ? 'text-slate-800'
                    : isDone
                    ? 'text-blue-600'
                    : 'text-slate-400'
                )}
              >
                {isDone ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-current text-[10px]">
                    {step.id}
                  </span>
                )}
                <span className="truncate">{step.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HighLightBar
