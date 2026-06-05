import ButtonHandler from '@/components/forms/sign-up/button-handlers'
import SignUpFormProvider from '@/components/forms/sign-up/form-provider'
import HighLightBar from '@/components/forms/sign-up/highlight-bar'
import RegistrationFormStep from '@/components/forms/sign-up/registration-step'
import React from 'react'

export const metadata = {
  title: 'Create account · Connect AI',
  description: 'Create your free Connect AI account in a minute.',
}

const SignUp = () => {
  return (
    <SignUpFormProvider>
      <div className="space-y-6">
        <HighLightBar />
        <div className="space-y-5">
          <RegistrationFormStep />
        </div>
        <ButtonHandler />
      </div>
    </SignUpFormProvider>
  )
}

export default SignUp
