import { APPOINTMENT_TABLE_HEADER } from '@/constants/menu' // Assuming this is: ['Customer', 'Date & Slot', 'Booked On', 'Domain']
import React from 'react'
import { DataTable } from '../table' // The table container
import { TableCell, TableRow } from '../ui/table'
import { CardDescription } from '../ui/card'
import { format } from 'date-fns' // Import date-fns for clean formatting

// ... (Type definition remains the same)

const AllAppointments = ({ bookings }: Props) => {
  return (
    <Card className="p-4 h-full shadow-lg"> {/* Wrap the table in a card for better framing */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">All Appointments</h2>
      <DataTable headers={APPOINTMENT_TABLE_HEADER}>
        {bookings && bookings.length > 0 ? (
          bookings.map((booking) => (
            <TableRow key={booking.id} className="hover:bg-gray-50 transition-colors"> {/* Added hover state */}
              
              {/* --- Customer Email (Main Contact) --- */}
              <TableCell className="font-medium text-gray-900">{booking.email}</TableCell>
              
              {/* --- Date & Slot (Consolidated) --- */}
              <TableCell>
                <div className="font-semibold text-primary"> {/* Highlight the slot for quick scanning */}
                  {format(booking.date, 'MMM d, yyyy')}
                </div>
                <div className="text-xs uppercase text-gray-600 font-mono">{booking.slot}</div>
              </TableCell>
              
              {/* --- Booked On (Creation Date) --- */}
              <TableCell className="text-gray-500 text-sm">
                <div>{format(booking.createdAt, 'MMM d, yyyy')}</div>
                <div className="font-semibold">{format(booking.createdAt, 'h:mm a')}</div>
              </TableCell>
              
              {/* --- Domain (Right aligned for data/status clarity) --- */}
              <TableCell className="text-right text-sm text-gray-700">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
                    {booking.Customer?.Domain?.name || 'Unassigned'}
                </span>
              </TableCell>

            </TableRow>
          ))
        ) : (
          // Professional empty state for the table
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
    </Card>
  )
}

export default AllAppointments