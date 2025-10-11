import { onGetSubscriptionPlan } from '@/actions/settings'
import React from 'react'
import Section from '../section-label'
import { Card, CardContent, CardDescription } from '../ui/card'
import { Check, CheckCircle2, Plus } from 'lucide-react'
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
  if (!planFeatures) return

  console.log(planFeatures)
  return (
    <div className="flex flex-wrap mx-3">
      <div className=" px-3 lg:w-2/3 lg:flex-none">
      <Modal
        title="Choose A Plan"
        description="Tell us about yourself! What do you do? Let’s tailor your experience so it best suits you."
        trigger={
          plan && plan === 'STANDARD' ? (
            <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center">
              <CardContent className="flex gap-2 items-center">
                <div className="rounded-full border-2 p-1">
                  <Plus className="text-gray-400" />
                </div>
                <CardDescription className="font-semibold">
                  Upgrade Plan
                </CardDescription>
              </CardContent>
            </Card>
          ) : (
            <div className="relative w-[400px] h-[250px] rounded-2xl shadow-xl overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/curved14.jpg')" }}
              ></div>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
              <div className="relative z-10 flex flex-col flex-auto p-4 h-full">
                <i className="p-2 text-white fas fa-wifi"></i>
                <h5 className="pb-2 mt-6 mb-12 text-white tracking-[0.3em]">
                  4562 1122 4594 7852
                </h5>
                <div className="flex justify-between items-end">
                  <div className="flex gap-6">
                    <div>
                      <p className="mb-0 leading-normal text-white text-sm opacity-80">
                        Card Holder
                      </p>
                      <h6 className="mb-0 text-white">Jack Peterson</h6>
                    </div>
                    <div>
                      <p className="mb-0 leading-normal text-white text-sm opacity-80">
                        Expires
                      </p>
                      <h6 className="mb-0 text-white">11/22</h6>
                    </div>
                  </div>
                  <div className="flex items-end justify-end w-1/5">
                    <Image
                      className="w-3/5 mt-2"
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
        }
      >
        <SubscriptionForm plan={plan!} />
      </Modal>

      </div>

<div className="w-fullpx-3 xl:w-1/2 xl:flex-none">
<div className="flex flex-wrap -mx-3">
  <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none">
    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
        <div className="w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl">
          <i className="relative text-white opacity-100 fas fa-landmark text-xl top-31/100"></i>
        </div>
      </div>
      <div className="flex-auto p-4 pt-0 text-center">
      <p className="text-sm font-semibold">{plan}</p>
      <div className="flex gap-2 flex-col mt-2">
          {planFeatures.map((feature) => (
            <div
              key={feature}
              className="flex gap-2"
            >
              <CheckCircle2 className="text-muted-foreground" />
              <p className="text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      {/* <div className="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
        <h3 className="text-xl font-semibold mb-2">Current Plan</h3>
        <p className="text-sm font-semibold">{plan}</p>
        <div className="flex gap-2 flex-col mt-2">
          {planFeatures.map((feature) => (
            <div
              key={feature}
              className="flex gap-2"
            >
              <CheckCircle2 className="text-muted-foreground" />
              <p className="text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default BillingSettings
