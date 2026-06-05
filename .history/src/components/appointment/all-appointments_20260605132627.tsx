import { APPOINTMENT_TABLE_HEADER } from '@/constants/menu'
import React from 'react'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import { format } from 'date-fns'

type Props = {
  bookings:
    | {
        Customer: {
          Domain: {
            name: string
          } | null
        } | null
        id: string
        email: string
        domainId: string | null
        date: Date
        slot: string
        createdAt: Date
      }[]
    | undefined
}

const AllAppointments = ({ bookings }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-6 py-4">
        <h2 className="font-display text-base font-semibold">All appointments</h2>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Every booking across every domain.
        </p>
      </div>
      <div className="flex-1 overflow-y-auto px-2 py-2">
        <DataTable headers={APPOINTMENT_TABLE_HEADER}>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
              <TableRow key={booking.id} className="border-border/60 hover:bg-muted/30">
                <TableCell className="font-medium text-foreground">{booking.email}</TableCell>
                <TableCell>
                  <div className="font-semibold text-primary">
                    {format(booking.date, 'MMM d, yyyy')}
                  </div>
                  <div className="text-xs uppercase text-muted-foreground">{booking.slot}</div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  <div>{format(booking.createdAt, 'MMM d, yyyy')}</div>
                  <div className="font-semibold text-foreground/80">
                    {format(booking.createdAt, 'h:mm a')}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80">
                    {booking.Customer?.Domain?.name || 'Unassigned'}
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={APPOINTMENT_TABLE_HEADER.length} className="py-12 text-center">
                <p className="text-base text-muted-foreground">No appointments yet</p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  When your AI books someone, they&apos;ll show up here.
                </p>
              </TableCell>
            </TableRow>
          )}
        </DataTable>
      </div>
    </div>
  )
}

export default AllAppointments
