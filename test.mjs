// test.mjs
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CLERK_ID = 'user_30YMgwSHEM0fvCPPFPnKSW7utUE'

async function test() {
  try {
    // Step 1: Check if user exists
    let user = await prisma.user.findUnique({
      where: { clerkId: CLERK_ID },
    })

    if (!user) {
      console.log('Prisma user not found, creating user...')
      user = await prisma.user.create({
        data: {
          clerkId: CLERK_ID,
          fullname: 'Tendai Gumunyu',
          type: 'owner',
          subscription: { create: {} },
        },
      })
      console.log('Created user:', user)
    } else {
      console.log('Prisma user found:', user)
    }

    // Step 2: Fetch domains for this user
    const domains = await prisma.domain.findMany({
      where: { userId: user.id },
      select: { id: true, name: true, icon: true },
    })

    console.log('Domains for this user:', domains)
  } catch (err) {
    console.error('DB connection or query failed:', err)
  } finally {
    await prisma.$disconnect()
  }
}

test()
