import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import UserTypeCard from './user-type-card'

type Props = {
  register: UseFormRegister<FieldValues>
  userType: 'owner' | 'student'
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Create your account
        </h1>
        <p className="text-sm text-slate-500">
          Help us tailor your experience. You can change this later.
        </p>
      </div>
      <div className="space-y-3">
        <UserTypeCard
          register={register}
          setUserType={setUserType}
          userType={userType}
          value="owner"
          title="I own a business"
          text="Setting up an account for my company."
        />
        <UserTypeCard
          register={register}
          setUserType={setUserType}
          userType={userType}
          value="student"
          title="I am a student"
          text="Creating an account to explore and learn the platform."
        />
      </div>
    </div>
  )
}

export default TypeSelectionForm
