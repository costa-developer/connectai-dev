import { onGetSubscriptionPlan } from '@/actions/settings'
import React from 'react'
import Section from '../section-label'
import { Card, CardContent, CardDescription } from '../ui/card'
import { CheckCircle2, Plus } from 'lucide-react'
import { pricingCards } from '@/constants/landing-page'
import Modal from '../mondal'
import SubscriptionForm from '../forms/settings/subscription-form'
import Image from 'next/image'

// --- Component for the 'Upgrade Plan' card trigger ---
const UpgradePlanCard = () => (
  <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center hover:shadow-lg transition-shadow">
    <CardContent className="flex gap-2 items-center">
      <div className="rounded-full border-2 p-2">
        <Plus className="text-gray-400 w-5 h-5" />
      </div>
      <CardDescription className="font-semibold text-gray-700">
        Upgrade Plan
      </CardDescription>
    </CardContent>
  </Card>
)

// --- Component for the 'Existing Card' display trigger (Mockup) ---
const ExistingCardDisplay = () => (
  <div className="relative w-full max-w-sm h-[250px] rounded-2xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform">
    {/* Background Image & Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/curved14.jpg')" }}
    ></div>
    <span className="absolute inset-0 bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
    
    {/* Card Content */}
    <div className="relative z-10 flex flex-col flex-auto p-6 h-full text-white">
      {/* Icon (Placeholder - assuming 'fas fa-wifi' is from an external font library) */}
      <i className="p-2 text-white fas fa-wifi"></i> 
      
      <h5 className="pb-2 mt-6 mb-10 text-xl tracking-widest font-mono">
        4562 1122 4594 7852
      </h5>
      
      <div className="flex justify-between items-end mt-auto">
        <div className="flex gap-6">
          <div>
            <p className="text-sm opacity-80 mb-1">Card Holder</p>
            <h6 className="text-lg font-semibold">Jack Peterson</h6>
          </div>
          <div>
            <p className="text-sm opacity-80 mb-1">Expires</p>
            <h6 className="text-lg font-semibold">11/22</h6>
          </div>
        </div>
        <div className="w-1/5">
          <Image
            src="/images/mastercard.png"
            width={100}
            height={50}
            alt="Mastercard Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
)

// --- Main Component ---

type Props = {}

const BillingSettings = async ({}: Props) => {
  // Rename 'plan' for clarity on what it represents
  const currentPlanName = await onGetSubscriptionPlan()
  
  // Guard clause for features lookup
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === currentPlanName?.toUpperCase()
  )?.features
  
  if (!planFeatures) return null 

  const planNameDisplay = currentPlanName?.toUpperCase() || 'N/A'
  
  return (
    <Section label="Billing & Plan">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* --- Card/Subscription Trigger Section (Left/Top) --- */}
        <div className="lg:w-1/2">
          <Modal
            title="Choose A Plan"
            description="Select the plan that best fits your needs to get started."
            trigger={
              currentPlanName && currentPlanName.toUpperCase() === 'STANDARD' ? (
                <UpgradePlanCard />
              ) : (
                <ExistingCardDisplay />
              )
            }
          >
            {/* Modal content for choosing/changing the subscription */}
            <SubscriptionForm plan={currentPlanName!} />
          </Modal>
        </div>

        {/* --- Current Plan Features Section (Right/Bottom) --- */}
        <div className="lg:w-1/2">
          <Card className="shadow-lg border-none h-full p-0">
            {/* The heavily styled div structure from the original component has been simplified */}
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded-2xl bg-clip-border h-full">
              
              {/* Header/Icon Area */}
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-xl rounded-xl flex items-center justify-center">
                  {/* Assuming 'fas fa-landmark' is a custom icon/font-icon */}
                  <i className="relative text-white text-2xl fas fa-landmark"></i> 
                </div>
              </div>
              
              {/* Content Area */}
              <div className="flex-auto p-6 pt-0 text-center">
                <h3 className="text-xl font-bold mb-4">{planNameDisplay}</h3>
                <p className="text-sm font-medium text-gray-500 mb-6">
                  Current Plan Features
                </p>
                <div className="flex flex-col gap-3">
                  {planFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-3 items-start justify-center text-left"
                    >
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
      </div>
    </Section>
  )
}

export default BillingSettings