import { onGetAllBookingsForCurrentUser } from '@/actions/appointment'
import AllAppointments from '@/components/appointment/all-appointments'
import InfoBar from '@/components/infobar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import { format } from 'date-fns'
import { CalendarClock, Clock, Inbox } from 'lucide-react'

type Props = {}

const Page = async (props: Props) => {
  const user = await currentUser()
  if (!user) return null

  const domainBookings = await onGetAllBookingsForCurrentUser(user.id)
  const today = new Date()

  const bookings: any[] = domainBookings?.bookings ?? []
  const bookingsExistToday = bookings.filter(
    (booking: any) => booking.date.toDateString() === today.toDateString()
  )
  const upcoming = bookings.filter((b: any) => b.date >= today).length
  const totalAll = bookings.length

  return (
    <>
      <InfoBar />

      <header className="rounded-2xl border border-border bg-card/40 px-6 py-5 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight">Appointments</h1>
            <p className="text-sm text-muted-foreground">
              Manage every booking your AI assistant captures, in one place.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Stat icon={<CalendarClock className="h-4 w-4" />} label="Today" value={bookingsExistToday.length} />
            <Stat icon={<Clock className="h-4 w-4" />} label="Upcoming" value={upcoming} />
            <Stat icon={<Inbox className="h-4 w-4" />} label="All time" value={totalAll} />
          </div>
        </div>
      </header>

      <div className="grid flex-1 grid-cols-1 gap-3 overflow-hidden lg:grid-cols-[320px_1fr]">
        {/* Today's focus */}
        <aside className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-display text-base font-semibold">Today's focus</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {bookingsExistToday.length} appointment{bookingsExistToday.length !== 1 ? 's' : ''} scheduled
            </p>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-4">
            {bookingsExistToday.length ? (
              bookingsExistToday.map((booking: any) => (
                <div
                  key={booking.id}
                  className="rounded-xl border border-border bg-background/40 p-3 transition hover:border-primary/40 hover:bg-background/60"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {booking.slot}
                    </span>
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="bg-muted text-[10px]">
                        {booking.email[0]?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="truncate text-sm font-medium text-foreground">{booking.email}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {booking.Customer?.Domain?.name || 'Unassigned domain'}
                  </p>
                  <div className="mt-2 flex justify-between border-t border-border/60 pt-2 text-[11px] text-muted-foreground">
                    <span>Booked</span>
                    <span>{format(booking.createdAt, 'MMM d, h:mm a')}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                Nothing on the calendar for today. Time for a coffee.
              </div>
            )}
          </div>
        </aside>

        {/* All appointments */}
        <section className="overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur">
          <AllAppointments bookings={bookings} />
        </section>
      </div>
    </>
  )
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 px-3 py-2">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="font-display text-xl font-bold">{value}</div>
    </div>
  )
}

export default Page
