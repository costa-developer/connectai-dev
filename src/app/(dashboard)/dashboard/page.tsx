import { getUserAppointments } from '@/actions/appointment'
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from '@/actions/dashboard'
import CardsRow from '@/components/CardsRow/CardsRow'
import DashboardCard from '@/components/dashboard/cards'
import { PlanUsage } from '@/components/dashboard/plan-usage'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import CalIcon from '@/icons/cal-icon'
import EmailIcon from '@/icons/email-icon'
import PersonIcon from '@/icons/person-icon'
import { TransactionsIcon } from '@/icons/transactions-icon'
import { DollarSign } from 'lucide-react'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  // Run all dashboard queries in parallel instead of sequentially.
  // This cuts total server time on Vercel from ~sum to ~max of the queries.
  const [clients, sales, bookings, plan, transactions, products] =
    await Promise.all([
      getUserClients(),
      getUserBalance(),
      getUserAppointments(),
      getUserPlanInfo(),
      getUserTransactions(),
      getUserTotalProductPrices(),
    ])

  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 py-8">
      <div className="flex flex-wrap -mx-3">
        <DashboardCard
          value={clients || 0}
          title="Potential Clients"
          icon={<PersonIcon />}
          gradient="bg-gradient-to-tl from-blue-600 to-cyan-400"
        />
        <DashboardCard
          value={products! * clients! || 0}
          title="Pipeline Value"
          icon={<DollarSign />}
          gradient="bg-gradient-to-tl from-purple-600 to-pink-500"
        />
        <DashboardCard
          value={bookings || 0}
          title="Appointments"
          icon={<CalIcon />}
          gradient="bg-gradient-to-tl from-blue-600 to-cyan-400"
        />
        <DashboardCard
          value={sales || 0}
          title="Total Sales"
          icon={<DollarSign />}
          gradient="bg-gradient-to-tl from-purple-600 to-pink-500"
        />
      </div>
      <CardsRow />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10 gap-4">
          <div className='bg-white shadow-soft-xl rounded-2xl p-4'>
            <div>
            <h2 className="font-bold capitalize">Plan Usage</h2>
              <p className="text-sm font-light">
                A detailed overview of your metrics, usage, customers and more
              </p>
            </div>
            <PlanUsage
              plan={plan?.plan!}
              credits={plan?.credits || 0}
              domains={plan?.domains || 0}
              clients={clients || 0}
            />
          </div>
          <div className="flex flex-col bg-white p-4 rounded-2xl shadow-soft-xl">
            {/* Header */}
            <div className="w-full flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <TransactionsIcon />
                <p className="font-bold">Recent Transactions</p>
              </div>
              <button className="text-sm text-blue-600 hover:underline">
                See more
              </button>
            </div>

            <Separator orientation="horizontal" className="mb-4" />

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-xl">
                <thead>
                  <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
                    <th className="p-3">Description</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions && transactions.data.length > 0 ? (
                    transactions.data.map((transaction) => (
                      
                      <tr
                        key={transaction.id}
                        className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-3 font-medium">
                          {transaction.calculated_statement_descriptor || 'N/A'}
                        </td>
                        <td className="p-3 font-semibold text-gray-800">
                          ${(transaction.amount / 100).toFixed(2)}
                        </td>
                        <td className="p-3 capitalize text-gray-600">
                          {transaction.status || 'completed'}
                        </td>
                        <td className="p-3 text-right text-gray-500 text-sm">
                          {new Date(transaction.created * 1000).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="p-5 text-center text-gray-500 italic"
                      >
                        No recent transactions
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Page
