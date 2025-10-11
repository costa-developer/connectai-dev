import { onGetSubscriptionPlan } from '@/actions/settings'
import React from 'react'
import Section from '../section-label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card' // Added CardHeader and CardTitle
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

  const paymentMethodCard = (
    <div className="relative w-full h-[250px] rounded-xl shadow-xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/curved14.jpg')" }}
      ></div>
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
      <div className="relative z-10 flex flex-col flex-auto p-4 h-full">
        <i className="p-2 text-white fas fa-wifi"></i>
        <h5 className="pb-2 mt-6 mb-12 text-white tracking-[0.3em] text-lg font-mono">
          4562 1122 4594 7852
        </h5>
        <div className="flex justify-between items-end">
          <div className="flex gap-6">
            <div>
              <p className="mb-0 leading-normal text-white text-sm opacity-80">
                Card Holder
              </p>
              <h6 className="mb-0 text-white font-semibold">Tendai Gumunyu</h6>
            </div>
            <div>
              <p className="mb-0 leading-normal text-white text-sm opacity-80">
                Expires
              </p>
              <h6 className="mb-0 text-white font-semibold">11/22</h6>
            </div>
          </div>
          <div className="flex items-end justify-end w-1/5">
            <Image
              className="w-full mt-2"
              src="/images/mastercard.png"
              width={100}
              height={50}
              alt="Mastercard Logo"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const upgradePlanCard = (
    <Card className="border-dashed bg-card hover:bg-muted/50 transition-colors border-gray-400 w-full cursor-pointer h-[250px] flex justify-center items-center ">
      <CardContent className="flex gap-3 flex-col items-center p-6 pt-6">
        <div className="rounded-full border-2 p-3">
          <Plus className="text-gray-600 h-6 w-6" />
        </div>
        <CardDescription className="font-semibold text-lg text-primary">
          Upgrade/Change Plan
        </CardDescription>
        <p className="text-sm text-muted-foreground text-center">
            Modify your current subscription or switch to a new tier.
        </p>
      </CardContent>
    </Card>
  )


  return (
    <div className="mt-8 p-4">
      <div className="mb-8">
        <Section
          label="Billing settings"
          message="Add payment information, upgrade and modify your plan."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <Card className="h-full rounded-2xl border-0 border-solid bg-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Your Current Plan</CardTitle>
            <CardDescription className="text-sm font-semibold text-primary">
                {plan}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-col">
              {planFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-2 items-start"
                >
                  <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-gray-500 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Modal
          title="Payment Details"
          description="View and update your stored payment method."
          trigger={
            <Card className="shadow-lg p-0 h-full cursor-pointer hover:shadow-xl transition-shadow">
                {paymentMethodCard} 
            </Card>
          }
        >
          <div className="p-4">
              <p>Payment details view/edit form will go here.</p>
          </div>
        </Modal>
        <Modal
          title="Choose A Plan"
          description="Tell us about yourself! What do you do? Let’s tailor your experience so it best suits you."
          trigger={
            <div className="h-full">
               {upgradePlanCard} 
            </div>
          }
        >
          <SubscriptionForm plan={plan!} />
        </Modal>

      </div>
    </div>
  )
}

export default BillingSettings