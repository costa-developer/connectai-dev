import { onGetAllBookingsForCurrentUser } from '@/actions/appointment'
import AllAppointments from '@/components/appointment/all-appointments'
import InfoBar from '@/components/infobar'
import Section from '@/components/section-label'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import { format } from 'date-fns' // 💡 Import for better date formatting

// 💡 Define a type for a single booking to improve type safety/clarity within this file.
// Assuming the structure is available via the action, but defining it here helps the component.
// You might need to adjust this based on the actual return type of onGetAllBookingsForCurrentUser
type Booking = NonNullable<Awaited<ReturnType<typeof onGetAllBookingsForCurrentUser>>>['bookings'][number]

// 💡 Helper component for the booking card to keep the main page cleaner
const TodayBookingCard: React.FC<{ booking: Booking }> = ({ booking }) => {
  const createdAtFormatted = format(booking.createdAt, 'h:mm a') // e.g., 3:45 PM
  const slotFormatted = format(new Date(`2000-01-01T${booking.slot}`), 'h:mm a') // assuming slot is a time string like '15:00:00'

  return (
    <Card className="rounded-xl overflow-hidden mt-4 shadow-md transition-all hover:shadow-lg">
      <CardContent className="p-0 flex min-h-[100px]">
        {/* 💡 Use a bolder color (or main brand color) and format the time */}
        <div className="w-3/12 text-lg bg-peach/80 text-white py-4 flex flex-col justify-center items-center font-bold text-center">
          <span className="text-sm font-normal">TIME</span>
          {/* Use formatted slot time */}
          <span className="text-xl">{slotFormatted}</span> 
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between w-full p-3 bg-gray-50/50">
            <p className="text-xs text-gray-600">
              Created <br />
              <span className="font-medium text-sm text-gray-800">{createdAtFormatted}</span>
            </p>
            <p className="text-xs text-right text-gray-600">
              Domain <br />
              {/* 💡 Added a fallback for domain name */}
              <span className="font-medium text-sm text-gray-800">{booking.Customer?.Domain?.name ?? 'N/A'}</span>
            </p>
          </div>
          <Separator orientation="horizontal" />
          <div className="w-full flex items-center p-3 gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-blue-500 text-white text-xs">
                {booking.email[0]?.toUpperCase() ?? '?'}{/* Safely access first letter */}
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium truncate">{booking.email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

type Props = {}

const Page = async (props: Props) => {
  const user = await currentUser()

  if (!user) return null
  // 💡 Handled potential null or undefined return from the action gracefully
  const domainBookings = await onGetAllBookingsForCurrentUser(user.id)
  
  // 💡 Use a constant for today's date for clarity and consistency
  const TODAY = new Date()
  TODAY.setHours(0, 0, 0, 0) // Normalize today's date to midnight

  if (!domainBookings || domainBookings.bookings.length === 0)
    return (
      <div className="w-full flex justify-center mt-10">
        <p className="text-gray-500 text-lg">No Appointments Found</p>
      </div>
    )

  // 💡 Filter logic improvement: Compare normalized dates for accuracy
  const bookingsExistToday = domainBookings.bookings.filter((booking) => {
    const bookingDate = new Date(booking.date) // Ensure it's a Date object
    bookingDate.setHours(0, 0, 0, 0) // Normalize the booking date to midnight
    return bookingDate.getTime() === TODAY.getTime()
  })


  return (
    <>
      <InfoBar />
      {/* 💡 Adjusted grid for better layout on smaller screens and a fixed height to prevent overflow issues */}
      <div className="grid grid-cols-1 lg:grid-cols-4 flex-1 h-[calc(100vh-100px)] gap-6 p-4 md:p-6">
        
        {/* All Appointments Section */}
        <div className="lg:col-span-2 overflow-y-auto bg-white rounded-xl p-4 shadow-sm border">
          {/* 💡 Added a title/section for the All Appointments component */}
          <Section label="All Upcoming Appointments" message="A complete list of all active appointments." />
          <AllAppointments bookings={domainBookings.bookings} />
        </div>
        
        {/* Today's Bookings Section */}
        <div className="lg:col-span-2 overflow-y-auto bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-100">
          <Section
            label={`Bookings For Today (${format(TODAY, 'EEE, MMM d')})`} // 💡 Dynamic date label
            message="All your appointments scheduled for today."
          />
          <Separator orientation="horizontal" className="my-4" />
          
          {bookingsExistToday.length > 0 ? (
            bookingsExistToday.map((booking) => (
              <TodayBookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <div className="w-full flex justify-center py-10 border border-dashed border-gray-300 rounded-lg mt-4">
              <p className="text-gray-500 font-medium">No Appointments For Today. Enjoy your day!</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Page