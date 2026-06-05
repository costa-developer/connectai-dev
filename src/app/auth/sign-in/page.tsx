import SignInFormProvider from '@/components/forms/sign-in/form-provider'
import LoginForm from '@/components/forms/sign-in/login-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Sign in · Connect AI',
  description: 'Securely sign in to your Connect AI workspace.',
}

const SignInPage = () => {
  return (
    <SignInFormProvider>
      <div className="space-y-6">
        <LoginForm />

        <div className="space-y-4">
          <Button type="submit" variant="gradient" className="!py-3">
            Sign in
          </Button>

          <p className="text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link
              href="/auth/sign-up"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </SignInFormProvider>
  )
}

export default SignInPage
