import { APPOINTMENT_TABLE_HEADER } from '@/constants/menu'
import React from 'react'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import { CardDescription, Card } from '../ui/card'
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
    <div className="p-4 h-full shadow-lg"> 
      <h2 className="text-xl font-semibold mb-4 text-gray-800">All Appointments</h2>
      <DataTable headers={APPOINTMENT_TABLE_HEADER}>
        {bookings && bookings.length > 0 ? (
          bookings.map((booking) => (
            <TableRow key={booking.id} className="hover:bg-gray-50 transition-colors">
              
              <TableCell className="font-medium text-gray-900">{booking.email}</TableCell>
            
              <TableCell>
                <div className="font-semibold text-primary"> 
                  {format(booking.date, 'MMM d, yyyy')}
                </div>
                <div className="text-xs uppercase text-gray-600 font-mono">{booking.slot}</div>
              </TableCell>
              <TableCell className="text-gray-500 text-sm">
                <div>{format(booking.createdAt, 'MMM d, yyyy')}</div>
                <div className="font-semibold">{format(booking.createdAt, 'h:mm a')}</div>
              </TableCell>
            
              <TableCell className="text-right text-sm text-gray-700">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
                    {booking.Customer?.Domain?.name || 'Unassigned'}
                </span>
              </TableCell>

            </TableRow>
          ))
        ) : (

          <TableRow>
            <TableCell colSpan={APPOINTMENT_TABLE_HEADER.length} className="text-center py-10">
                <p className="text-lg text-gray-500">No Appointments Found</p>
                <CardDescription className="mt-1">
                    All completed, or no appointments have been scheduled yet.
                </CardDescription>
            </TableCell>
          </TableRow>
        )}
      </DataTable>
    </div>
  )
}

export default AllAppointments