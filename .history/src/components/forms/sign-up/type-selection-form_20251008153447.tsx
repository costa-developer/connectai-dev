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
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Create an Account</h2>
      <p className="text-iridium md:text-sm">
        Help us understand your role so we can tailor your experience for maximum value.
      </p>
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
    </>
  )
}

export default TypeSelectionForm
