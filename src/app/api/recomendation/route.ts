import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'
import {
  IRecomendation,
  recomendationSchema,
} from '@/schema/recomendation.schema'
import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  if (!session?.user)
    return new NextResponse('Es necesario iniciar sesión para esta acción', {
      status: 401,
    })
  const data: IRecomendation = await req.json()

  try {
    const recomendation = recomendationSchema.parse(data)

    const createdFeedback = await prisma.recomendation.create({
      data: {
        content: recomendation.content,
        rating: recomendation.rating,
        userId: session?.user.id!,
        area: recomendation.area,
        competences: recomendation.competences,
        position: recomendation.position,
        proyects: recomendation.proyects,
      },
    })

    return NextResponse.json(createdFeedback)
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal')
  }
}
