import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'
import { feedbackSchema, IFeedback } from '@/schema/feeback.schema'
import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  if (!session?.user)
    return new NextResponse('Es necesario iniciar sesión para esta acción', {
      status: 401,
    })
  const data: IFeedback = await req.json()

  try {
    const feedBack = feedbackSchema.parse(data)

    const createdFeedback = await prisma.feedback.create({
      data: {
        content: feedBack.content,
        rating: feedBack.rating,
        userId: session?.user.id!,
        area: feedBack.area,
        competences: feedBack.competences,
        develop: feedBack.develop,
        position: feedBack.position,
        proyects: feedBack.proyects,
      },
    })

    return NextResponse.json(createdFeedback)
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal')
  }
}
