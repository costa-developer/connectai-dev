import React from 'react'

type Props = {
  title: string
  value: number | string
  icon: JSX.Element
  percentage?: string
  percentagePositive?: boolean
}

const DashboardCard = ({ title, value, icon, percentage, percentagePositive = true }: Props) => {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            {/* Left Side: Text */}
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans text-sm font-semibold leading-normal">{title}</p>
                <h5 className="mb-0 font-bold text-lg">
                  {value}
                  {percentage && (
                    <span
                      className={`text-sm leading-normal font-semibold ml-2 ${
                        percentagePositive ? 'text-lime-500' : 'text-red-500'
                      }`}
                    >
                      {percentage}
                    </span>
                  )}
                </h5>
              </div>
            </div>

            {/* Right Side: Icon */}
            <div className="px-3 text-right basis-1/3">
              <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                <div className="flex items-center justify-center w-full h-full text-white">
                  {icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
