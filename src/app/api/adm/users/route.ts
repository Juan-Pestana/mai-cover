import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'

export async function GET() {
  console.log('test users')

  try {
    const users = await prisma.user.findMany({
      where: {
        email: 'bbermejoa@gmail.com',
      },
      include: {
        letters: true,
        feedbacks: true,
        cvAdapts: true,
        recomendations: true,
        positions: true,
        profiles: true,
        accounts: true,
      },
    })

    //console.log(profiles)

    if (users && users.length) return NextResponse.json(users)

    if (!users || !users.length)
      return new NextResponse('No se han encontrado Perfiles', { status: 404 })
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal', { status: 400 })
  }
}
