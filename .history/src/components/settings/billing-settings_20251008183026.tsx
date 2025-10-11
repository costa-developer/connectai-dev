import { onGetSubscriptionPlan } from '@/actions/settings'
import React from 'react'
import Section from '../section-label'
import { Card, CardContent, CardDescription } from '../ui/card'
import { CheckCircle2, Plus } from 'lucide-react'
import { pricingCards } from '@/constants/landing-page'
import Modal from '../mondal'
import SubscriptionForm from '../forms/settings/subscription-form'
import Image from 'next/image'

type Props = {}

const BillingSettings = async (props: Props) => {
  const plan = await onGetSubscriptionPlan()
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan?.toUpperCase()
  )?.features
  if (!planFeatures) return null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 mt-8 p-4">
      {/* Upgrade / Card Display */}
      <div className="lg:col-span-2 flex justify-center">
        <Modal
          title="Choose A Plan"
          description="Tell us about yourself! What do you do? Let’s tailor your experience so it best suits you."
          trigger={
            plan === 'STANDARD' ? (
              <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center hover:shadow-lg transition-all duration-300">
                <CardContent className="flex gap-3 items-center">
                  <div className="rounded-full border-2 p-2 flex items-center justify-center">
                    <Plus className="text-gray-500 w-6 h-6" />
                  </div>
                  <CardDescription className="font-semibold text-gray-700 text-lg">
                    Upgrade Plan
                  </CardDescription>
                </CardContent>
              </Card>
            ) : (
              <div className="relative w-[400px] h-[250px] rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/curved14.jpg')" }}
                />
                <span className="absolute inset-0 bg-gradient-to-tl from-gray-900 via-gray-800 to-slate-700 opacity-80"></span>
                <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                  <div className="flex justify-between items-start">
                    <i className="fas fa-wifi text-xl"></i>
                    <span className="font-semibold tracking-wide">VISA</span>
                  </div>
                  <h5 className="text-2xl font-mono tracking-widest">
                    4562 1122 4594 7852
                  </h5>
                  <div className="flex justify-between items-end">
                    <div className="flex gap-8">
                      <div>
                        <p className="text-xs opacity-70">Card Holder</p>
                        <h6 className="text-sm font-semibold">Jack Peterson</h6>
                      </div>
                      <div>
                        <p className="text-xs opacity-70">Expires</p>
                        <h6 className="text-sm font-semibold">11/22</h6>
                      </div>
                    </div>
                    <div className="w-16">
                      <Image
                        src="/images/mastercard.png"
                        width={64}
                        height={40}
                        alt="Mastercard Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        >
          <SubscriptionForm plan={plan!} />
        </Modal>
      </div>

      {/* Current Plan Details */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Current Plan</h3>
        <p className="text-lg font-medium mb-4">{plan}</p>
        <div className="flex flex-col gap-3">
          {planFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BillingSettings
