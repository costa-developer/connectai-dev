'use client'
import { USER_REGISTRATION_FORM } from '@/constants/forms'
import { cn } from '@/lib/utils'
import React from 'react'
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useWatch,
  Control,
} from 'react-hook-form'
import FormGenerator from '../form-generator'

type Props = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  control?: Control<FieldValues>
}

/**
 * Lightweight password strength meter. Heuristics only — the real check
 * lives in Zod (uppercase, lowercase, number, length).
 */
const scorePassword = (pw: string): number => {
  if (!pw) return 0
  let score = 0
  if (pw.length >= 8) score++
  if (pw.length >= 12) score++
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  return Math.min(score, 4)
}

const STRENGTH_LABELS = ['Too weak', 'Weak', 'Okay', 'Strong', 'Excellent']
const STRENGTH_COLORS = [
  'bg-slate-200',
  'bg-red-400',
  'bg-amber-400',
  'bg-emerald-400',
  'bg-emerald-500',
]

const PasswordStrength = ({ control }: { control?: Control<FieldValues> }) => {
  const password = useWatch({ control, name: 'password' }) as string | undefined
  const score = scorePassword(password || '')
  const filled = Math.max(score, password ? 1 : 0)

  return (
    <div className="-mt-2 mb-4">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              'h-1 flex-1 rounded-full transition-colors',
              i < filled ? STRENGTH_COLORS[score] : 'bg-slate-200'
            )}
          />
        ))}
      </div>
      <p className="mt-1.5 text-[11px] text-slate-500">
        {password
          ? `Strength: ${STRENGTH_LABELS[score]}`
          : 'Use 8+ chars with upper, lower & numbers'}
      </p>
    </div>
  )
}

function AccountDetailsForm({ errors, register, control }: Props) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Account details
        </h2>
        <p className="text-sm text-slate-500">
          Enter your name, email and a secure password.
        </p>
      </div>

      <div>
        {USER_REGISTRATION_FORM.map((field) => {
          const isNewPassword =
            field.name === 'password' || field.name === 'confirmPassword'
          const node = (
            <FormGenerator
              key={field.id}
              {...field}
              errors={errors}
              register={register}
              name={field.name}
              autoComplete={
                isNewPassword
                  ? 'new-password'
                  : field.name === 'fullname'
                  ? 'name'
                  : field.name === 'email' || field.name === 'confirmEmail'
                  ? 'email'
                  : undefined
              }
            />
          )
          if (field.name === 'password') {
            return (
              <React.Fragment key={field.id}>
                {node}
                <PasswordStrength control={control} />
              </React.Fragment>
            )
          }
          return node
        })}
      </div>
    </div>
  )
}

export default AccountDetailsForm
