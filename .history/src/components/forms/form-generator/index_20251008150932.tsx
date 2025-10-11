import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { strict } from 'assert'
import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'

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
}

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
}: Props) => {
  const labelText = label || placeholder || name

  switch (inputType) {
    case 'input':
    default:
      return (
        <div className="mb-4">
          <Label htmlFor={`input-${name}`} className="block mb-1 font-bold text-xs text-slate-700">
            {labelText}
          </Label>
          <Input
            id={`input-${name}`}
            type={type}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-1">{message === 'Required' ? '' : message}</p>
            )}
          />
        </div>
      )
    case 'select':
      return (
        <div className="mb-4">
          <Label htmlFor={`select-${name}`} className="block mb-1 font-bold text-xs text-slate-700">
            {labelText}
          </Label>
          <select
            id={`select-${name}`}
            form={form}
            {...register(name)}
            className="w-full border rounded px-2 py-1"
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
              <p className="text-red-400 mt-1">{message === 'Required' ? '' : message}</p>
            )}
          />
        </div>
      )
    case 'textarea':
      return (
        <div className="mb-4">
          <Label htmlFor={`textarea-${name}`} className="block mb-1 font-bold text-xs text-slate-700">
            {labelText}
          </Label>
          <Textarea
            id={`textarea-${name}`}
            form={form}
            placeholder={placeholder}
            {...register(name)}
            rows={lines || 4}
            defaultValue={defaultValue}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-1">{message === 'Required' ? '' : message}</p>
            )}
          />
        </div>
      )
  }
}


export default FormGenerator
