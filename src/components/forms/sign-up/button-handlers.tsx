'use client'
import { Button } from '@/components/ui/button'
import { useAuthContextHook } from '@/context/use-auth-context'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const SignInPrompt = () => (
  <p className="text-center text-sm text-slate-500">
    Already have an account?{' '}
    <Link
      href="/auth/sign-in"
      className="font-semibold text-blue-600 hover:text-blue-700"
    >
      Sign in
    </Link>
  </p>
)

const ButtonHandler = () => {
  const { setCurrentStep, currentStep } = useAuthContextHook()
  const { formState, getFieldState, getValues } = useFormContext()
  const { onGenerateOTP, loading } = useSignUpForm()

  const { isDirty: isName, invalid: nameInvalid } = getFieldState(
    'fullname',
    formState
  )
  const { isDirty: isEmail, invalid: emailInvalid } = getFieldState(
    'email',
    formState
  )
  const { isDirty: isPassword, invalid: pwInvalid } = getFieldState(
    'password',
    formState
  )

  if (currentStep === 3) {
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <Button
          type="submit"
          variant="gradient"
          disabled={loading}
          className="!py-3"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating account…
            </span>
          ) : (
            'Create my account'
          )}
        </Button>
        <SignInPrompt />
      </div>
    )
  }

  if (currentStep === 2) {
    const canContinue = isName && isEmail && isPassword && !nameInvalid && !emailInvalid && !pwInvalid
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <Button
          type="button"
          variant="gradient"
          disabled={!canContinue || loading}
          onClick={() =>
            canContinue &&
            onGenerateOTP(
              getValues('email'),
              getValues('password'),
              setCurrentStep
            )
          }
          className="!py-3"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending code…
            </span>
          ) : (
            'Continue'
          )}
        </Button>
        <p className="text-center text-xs text-slate-400">
          By continuing you agree to our Terms and Privacy Policy.
        </p>
        <SignInPrompt />
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <Button
        type="button"
        variant="gradient"
        onClick={() => setCurrentStep((prev: number) => prev + 1)}
        className="!py-3"
      >
        Continue
      </Button>
      <SignInPrompt />
    </div>
  )
}

export default ButtonHandler
