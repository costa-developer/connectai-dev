// Imports remain mostly the same, ensuring all components are available
import { onGetAllBookingsForCurrentUser } from '@/actions/appointment'
import AllAppointments from '@/components/appointment/all-appointments'
import InfoBar from '@/components/infobar'
import Section from '@/components/section-label'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card' // Added CardHeader, CardTitle
import { Separator } from '@/components/ui/separator'
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import { format } from 'date-fns' // Use date-fns for professional formatting

type Props = {}

const Page = async (props: Props) => {
  const user = await currentUser()

  if (!user) return null
  const domainBookings = await onGetAllBookingsForCurrentUser(user.id)
  const today = new Date()

  if (!domainBookings) {
    // A professional empty state for the entire page
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
    (booking) => booking.date.toDateString() === today.toDateString() // Better date comparison
  )

  return (
    <>
      <InfoBar />
      {/* --- Page Header for Professionalism --- */}
      <header className="px-6 py-4 border-b border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Appointment Dashboard</h1>
        <p className="text-sm text-gray-500">Manage all your customer bookings and appointments.</p>
      </header>
      {/* --- Main Grid Layout: Adjusted for better visual hierarchy (e.g., 3/1 split) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-4 flex-1 h-full gap-6 p-6">
        
        {/* --- Primary Content: All Appointments Table (3/4 width) --- */}
        <div className="lg:col-span-3 overflow-y-auto h-full">
          <AllAppointments bookings={domainBookings?.bookings} />
        </div>

        {/* --- Secondary Content: Today's Focus Card (1/4 width) --- */}
        <div className="lg:col-span-1">
          <Card className="h-full border-0 shadow-lg bg-white">
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
                      {/* --- Refined Time Slot Display (Visual Accent) --- */}
                      <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {booking.slot}
                      </div>
                      
                      {/* --- Customer Avatar --- */}
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-gray-200">
                          {booking.email[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* --- Email and Domain Details --- */}
                    <p className="text-sm font-medium truncate">{booking.email}</p>
                    <p className="text-xs text-gray-500 truncate">
                      Domain: <span className="font-semibold">{booking.Customer?.Domain?.name || 'N/A'}</span>
                    </p>

                    <Separator orientation="horizontal" className="my-2" />

                    {/* --- Metadata --- */}
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
          </Card>
        </div>
      </div>
    </>
  )
}

export default Page