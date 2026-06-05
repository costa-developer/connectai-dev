'use client'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Briefcase, GraduationCap, Check } from 'lucide-react'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  value: string
  title: string
  text: string
  register: UseFormRegister<FieldValues>
  userType: 'owner' | 'student'
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const UserTypeCard = ({
  register,
  setUserType,
  text,
  title,
  userType,
  value,
}: Props) => {
  const isActive = userType === value
  const Icon = value === 'owner' ? Briefcase : GraduationCap

  return (
    <Label htmlFor={value} className="block cursor-pointer">
      <Card
        className={cn(
          'w-full transition-all duration-200',
          isActive
            ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-sm bg-blue-50/40'
            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
        )}
      >
        <CardContent className="flex items-center justify-between gap-3 p-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-xl transition-all',
                isActive
                  ? 'bg-gradient-to-tl from-blue-600 to-cyan-400 text-white shadow-soft-md'
                  : 'bg-slate-100 text-slate-500'
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <CardDescription className="font-semibold text-slate-800">
                {title}
              </CardDescription>
              <CardDescription className="text-xs text-slate-500">
                {text}
              </CardDescription>
            </div>
          </div>
          <div
            className={cn(
              'flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all',
              isActive
                ? 'border-transparent bg-gradient-to-tl from-blue-600 to-cyan-400'
                : 'border-slate-300 bg-transparent'
            )}
          >
            {isActive && <Check className="h-3 w-3 text-white" />}
            <Input
              {...register('type', {
                onChange: (event) => setUserType(event.target.value),
              })}
              value={value}
              id={value}
              className="hidden"
              type="radio"
            />
          </div>
        </CardContent>
      </Card>
    </Label>
  )
}

export default UserTypeCard
