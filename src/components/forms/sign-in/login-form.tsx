'use client'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import FormGenerator from '../form-generator'
import { USER_LOGIN_FORM } from '@/constants/forms'
import Link from 'next/link'

const LoginForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h1>
        <p className="text-sm text-slate-500">
          Sign in to manage your conversations, campaigns and bookings.
        </p>
      </div>

      <div>
        {USER_LOGIN_FORM.map((field) => (
          <FormGenerator
            key={field.id}
            {...field}
            errors={errors}
            register={register}
            name={field.name}
          />
        ))}

        <div className="flex items-center justify-between -mt-1 mb-1 text-xs">
          <label className="inline-flex items-center gap-2 text-slate-500 cursor-pointer select-none">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Remember me
          </label>
          <Link
            href="/auth/sign-in"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
