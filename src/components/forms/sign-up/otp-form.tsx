import OTPInput from '@/components/otp'
import { MailCheck } from 'lucide-react'
import React from 'react'

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>
  onOTP: string
}

const OTPForm = ({ onOTP, setOTP }: Props) => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tl from-blue-600 to-cyan-400 text-white shadow-soft-md">
          <MailCheck className="h-5 w-5" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Check your inbox
        </h2>
        <p className="text-sm text-slate-500">
          Enter the 6-digit code we just emailed you to finish creating your
          account.
        </p>
      </div>
      <div className="flex w-full justify-center py-3">
        <OTPInput otp={onOTP} setOtp={setOTP} />
      </div>
      <p className="text-center text-xs text-slate-400">
        The code expires in 10 minutes. Check spam if you don&apos;t see it.
      </p>
    </div>
  )
}

export default OTPForm
