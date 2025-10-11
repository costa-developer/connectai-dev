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
    <div className=" gap-10 rounded-2xl border-0 border-solid bg-white mt-8 p-4">
      <div className="">
        <Section
          label="Change Password"
          message="Reset your password"
        />
      </div>
      <form
        onSubmit={onChangePassword}
      >
        <div className="mt-8 flex flex-col gap-3">
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
          <Button className="bg-grandis text-gray-700 font-semibold">
            <Loader loading={loading}>Change Password</Loader>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
