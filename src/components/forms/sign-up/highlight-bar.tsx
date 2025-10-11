'use client'
import { useAuthContextHook } from '@/context/use-auth-context'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

const HighLightBar = (props: Props) => {
  const { currentStep } = useAuthContextHook()

  return (
    <div className="grid grid-cols-3 gap-3">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={cn(
            'rounded-full h-2 col-span-1 transition-all duration-300',
            step === currentStep
              ? 'bg-gradient-to-tl from-blue-600 to-cyan-400 shadow-soft-md'
              : 'bg-platinum'
          )}
        ></div>
      ))}
    </div>
  )
}

export default HighLightBar
