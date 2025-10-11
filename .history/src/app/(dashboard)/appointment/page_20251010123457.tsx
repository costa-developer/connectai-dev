import { onGetAllBookingsForCurrentUser } from '@/actions/appointment'
import AllAppointments from '@/components/appointment/all-appointments'
import InfoBar from '@/components/infobar'
import Section from '@/components/section-label'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import { format } from 'date-fns'

type Props = {}

const Page = async (props: Props) => {
  const user = await currentUser()

  if (!user) return null
  const domainBookings = await onGetAllBookingsForCurrentUser(user.id)
  const today = new Date()

  if (!domainBookings) {
    return (
      <div className="flex flex-col h-screen p-6">
        <InfoBar />
        <Card className="flex-1 flex items-center justify-center m-4">
          <p className="text-xl text-gray-500">No Appointments Available</p>
        </Card>
      </div>
    )
  }

  const bookingsExistToday = domainBookings.bookings.filter(
    (booking) => booking.date.toDateString() === today.toDateString() 
  )

  return (
    <>
      <InfoBar />
      <header className="px-6 py-4 border-b border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Appointment Dashboard</h1>
        <p className="text-sm text-gray-500">Manage all your customer bookings and appointments.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-4 flex-1 h-full p-6">
        <div className="lg:col-span-1 flex-shrink-0 bg-slate-800 border-r border-slate-700 shadow-xl">
          <div className="h-full">
            <CardHeader className="p-4 border-b">
              <CardTitle className="text-lg font-semibold">Today's Focus</CardTitle>
              <p className="text-sm text-gray-500">
                {bookingsExistToday.length} appointment{bookingsExistToday.length !== 1 ? 's' : ''} today.
              </p>
            </CardHeader>

            <CardContent className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              {bookingsExistToday.length ? (
                bookingsExistToday.map((booking) => (
                  <div
                    key={booking.id}
                    className="p-3 border rounded-xl hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {booking.slot}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-gray-200">
                          {booking.email[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="text-sm font-medium truncate">{booking.email}</p>
                    <p className="text-xs text-gray-500 truncate">
                      Domain: <span className="font-semibold">{booking.Customer?.Domain?.name || 'N/A'}</span>
                    </p>

                    <Separator orientation="horizontal" className="my-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Booked:</span>
                      <span>
                        {format(booking.createdAt, 'MMM d, h:mm a')}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No appointments scheduled for today.</p>
                </div>
              )}
            </CardContent>
          </div>
        </div>
        <div className="lg:col-span-3 overflow-y-auto h-full">
          <AllAppointments bookings={domainBookings?.bookings} />
        </div>
      </div>
    </>
  )
}

export default Page