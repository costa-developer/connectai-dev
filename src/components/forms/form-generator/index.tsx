'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { ErrorMessage } from '@hookform/error-message'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  type: 'text' | 'email' | 'password'
  inputType: 'select' | 'input' | 'textarea'
  options?: { value: string; label: string; id: string }[]
  label?: string
  placeholder: string
  register: UseFormRegister<any>
  name: string
  errors: FieldErrors<FieldValues>
  lines?: number
  form?: string
  defaultValue?: string
  /** explicit autocomplete override; otherwise inferred from name */
  autoComplete?: string
  maxLength?: number
}

/**
 * Pick a sensible HTML autocomplete value from the field name + type.
 * Helps password managers + improves UX/security.
 */
const inferAutoComplete = (name: string, type: string): string => {
  const n = name.toLowerCase()
  if (type === 'email' || n.includes('email')) return 'email'
  if (n === 'fullname' || n === 'name') return 'name'
  if (n === 'confirmpassword' || n.includes('newpassword')) return 'new-password'
  if (type === 'password') {
    // signup uses 'password' as the new password; login uses it as current.
    // Defaulting to current-password is safer for login forms; signup form
    // can pass autoComplete="new-password" explicitly.
    return 'current-password'
  }
  if (n === 'otp' || n.includes('code')) return 'one-time-code'
  if (n.includes('phone')) return 'tel'
  return 'on'
}

const baseLabel =
  'block mb-1.5 text-xs font-semibold text-slate-700 tracking-wide'
const baseError = 'text-xs text-red-500 mt-1.5'

const FormGenerator = ({
  errors,
  inputType,
  name,
  placeholder,
  defaultValue,
  register,
  type,
  form,
  label,
  lines,
  options,
  autoComplete,
  maxLength,
}: Props) => {
  const labelText = label || placeholder || name
  const ac = autoComplete ?? inferAutoComplete(name, type)
  const [showPassword, setShowPassword] = useState(false)

  switch (inputType) {
    case 'input':
    default: {
      const isPassword = type === 'password'
      const effectiveType = isPassword && showPassword ? 'text' : type

      // Reasonable hard caps to avoid abuse / DoS-style payloads
      const inferredMax =
        maxLength ??
        (type === 'email'
          ? 254
          : isPassword
          ? 64
          : name === 'otp'
          ? 6
          : 120)

      return (
        <div className="mb-4">
          <Label htmlFor={`input-${name}`} className={baseLabel}>
            {labelText}
          </Label>
          <div className="relative">
            <Input
              id={`input-${name}`}
              type={effectiveType}
              placeholder={placeholder}
              form={form}
              defaultValue={defaultValue}
              autoComplete={ac}
              maxLength={inferredMax}
              spellCheck={isPassword || type === 'email' ? false : undefined}
              inputMode={type === 'email' ? 'email' : undefined}
              className={cn(
                'h-11 rounded-lg border-slate-200 bg-white text-sm shadow-sm',
                'focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:border-blue-500',
                'placeholder:text-slate-400',
                isPassword && 'pr-11'
              )}
              {...register(name)}
            />
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
                className="absolute inset-y-0 right-2 my-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={baseError}>
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </div>
      )
    }
    case 'select':
      return (
        <div className="mb-4">
          <Label htmlFor={`select-${name}`} className={baseLabel}>
            {labelText}
          </Label>
          <select
            id={`select-${name}`}
            form={form}
            {...register(name)}
            className="w-full h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
          >
            {options?.map((option) => (
              <option value={option.value} key={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={baseError}>
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </div>
      )
    case 'textarea':
      return (
        <div className="mb-4">
          <Label htmlFor={`textarea-${name}`} className={baseLabel}>
            {labelText}
          </Label>
          <Textarea
            id={`textarea-${name}`}
            form={form}
            placeholder={placeholder}
            {...register(name)}
            rows={lines || 4}
            defaultValue={defaultValue}
            maxLength={maxLength ?? 2000}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={baseError}>
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </div>
      )
  }
}

export default FormGenerator
