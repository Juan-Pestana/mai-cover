import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismaClient'

export async function GET() {
  const session = await getServerSession(options)

  if (!session?.user)
    return new NextResponse('No se ha encontrado el usuario', { status: 401 })

  try {
    const profiles = await prisma.profile.findMany({
      where: {
        userId: session.user.id,
      },
    })

    console.log(profiles)

    if (profiles && profiles.length) return NextResponse.json(profiles)
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal', { status: 400 })
  }
}
