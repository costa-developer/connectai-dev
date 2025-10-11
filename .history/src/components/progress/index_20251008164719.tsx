'use client'
import React from 'react'
import { Progress } from '@/components/ui/progress'

type ProgressBarProps = {
  label?: string
  end: number
  credits: number
  color?: string
}

export const ProgressBar = ({ end, credits, color = 'bg-blue-500' }: ProgressBarProps) => {
  const progressValue = Math.min((credits / end) * 100, 100)
  return (
    <div className="flex flex-col gap-1">
      <Progress
        value={progressValue}
        color={color}
        className="h-2 rounded-full"
      />
    </div>
  )
}
