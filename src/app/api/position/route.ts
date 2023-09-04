import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'
import { positionSchema, IPosition } from '@/schema/position.schema'
import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  if (!session?.user)
    return new NextResponse('Es necesario iniciar sesión para esta acción', {
      status: 401,
    })
  const data: IPosition = await req.json()

  try {
    const position = positionSchema.parse(data)

    const createdPosition = await prisma.position.create({
      data: {
        content: position.content,
        rating: position.rating,
        userId: session?.user.id!,
        industry: position.industry,
        position: position.position,
        proyects: position.proyects,
      },
    })

    return NextResponse.json(createdPosition)
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal', { status: 500 })
  }
}
