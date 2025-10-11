'use client'
import { useChangePassword } from '@/hooks/settings/use-settings'
import React from 'react'
import Section from '../section-label'
import FormGenerator from '../forms/form-generator'
import { Button } from '../ui/button'
import { Loader } from '../loader'

type Props = {}

const ChangePassword = (props: Props) => {
  const { register, errors, onChangePassword, loading } = useChangePassword()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-md">
        <Section label="Change Password" message="Reset your password" />

        <form onSubmit={onChangePassword} className="mt-6 flex flex-col gap-4">
          <FormGenerator
            register={register}
            errors={errors}
            name="password"
            placeholder="New Password"
            type="text"
            inputType="input"
          />
          <FormGenerator
            register={register}
            errors={errors}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="text"
            inputType="input"
          />
          <Button className="bg-grandis text-gray-700 font-semibold mt-2">
            <Loader loading={loading}>Change Password</Loader>
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
