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
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-8 p-4">
      {/* Left Column */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        {/* Credit Card */}
        <div className="relative w-full h-[250px] rounded-2xl shadow-2xl overflow-hidden">
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

        {/* Mini Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-soft-xl p-4 text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl flex items-center justify-center mb-2">
              <i className="fas fa-landmark text-white text-xl"></i>
            </div>
            <h6 className="mb-1">Salary</h6>
            <span className="text-xs text-gray-500">Belong Interactive</span>
            <hr className="my-2 border-t border-gray-300" />
            <h5 className="mb-0">+$2000</h5>
          </div>

          <div className="bg-white rounded-2xl shadow-soft-xl p-4 text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl flex items-center justify-center mb-2">
              <i className="fab fa-paypal text-white text-xl"></i>
            </div>
            <h6 className="mb-1">Paypal</h6>
            <span className="text-xs text-gray-500">Freelance Payment</span>
            <hr className="my-2 border-t border-gray-300" />
            <h5 className="mb-0">$455.00</h5>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl shadow-soft-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h6 className="font-semibold">Payment Method</h6>
            <button className="px-4 py-2 bg-gradient-to-tl from-gray-900 to-slate-800 text-white rounded-lg text-xs flex items-center gap-2">
              <i className="fas fa-plus"></i> Add New Card
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center p-4 border rounded-xl">
              <Image
                src="/images/mastercard.png"
                width={40}
                height={24}
                alt="Mastercard"
              />
              <h6 className="ml-3">**** **** **** 7852</h6>
              <i className="ml-auto fas fa-pencil-alt text-gray-700 cursor-pointer"></i>
            </div>

            <div className="flex items-center p-4 border rounded-xl">
              <Image
                src="/images/visa.png"
                width={40}
                height={24}
                alt="Visa"
              />
              <h6 className="ml-3">**** **** **** 5248</h6>
              <i className="ml-auto fas fa-pencil-alt text-gray-700 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        {/* Invoices */}
        <div className="bg-white rounded-2xl shadow-soft-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h6 className="font-semibold">Invoices</h6>
            <button className="px-4 py-2 text-fuchsia-500 border border-fuchsia-500 rounded-lg text-xs hover:opacity-75">
              View All
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            {[
              { date: 'March 1, 2020', id: '#MS-415646', amount: '$180' },
              { date: 'February 10, 2021', id: '#RV-126749', amount: '$250' },
              { date: 'April 5, 2020', id: '#FB-212562', amount: '$560' },
              { date: 'June 25, 2019', id: '#QW-103578', amount: '$120' },
              { date: 'March 1, 2019', id: '#AR-803481', amount: '$300' },
            ].map((invoice, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-2 border rounded-xl"
              >
                <div className="flex flex-col">
                  <h6 className="text-sm font-semibold">{invoice.date}</h6>
                  <span className="text-xs text-gray-500">{invoice.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{invoice.amount}</span>
                  <button className="text-gray-700 text-sm flex items-center gap-1">
                    <i className="fas fa-file-pdf text-lg"></i> PDF
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Plan Details */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
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
    </div>
  )
}

export default BillingSettings
