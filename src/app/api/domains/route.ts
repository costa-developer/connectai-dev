// /app/api/domains/route.ts
import { NextResponse } from 'next/server'
import { client } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const clerkId = url.searchParams.get('userId')

    if (!clerkId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
    }

    const prismaUser = await client.user.findUnique({
      where: { clerkId },
      select: { id: true },
    })

    if (!prismaUser) {
      return NextResponse.json({ error: 'Prisma user not found' }, { status: 404 })
    }
    const domains = await client.domain.findMany({
      where: { userId: prismaUser.id },
      select: { id: true, name: true, icon: true },
    })

    return NextResponse.json({ domains })
  } catch (error) {
    console.error('Error fetching domains:', error)
    return NextResponse.json(
      { error: 'Failed to fetch domains', details: (error as any).message },
      { status: 500 }
    )
  }
}
