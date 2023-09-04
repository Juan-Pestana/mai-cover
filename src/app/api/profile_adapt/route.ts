import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'
import { letterSchema, ILetter } from '@/schema/letter.schema'
import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  if (!session?.user)
    return new NextResponse('Es necesario iniciar sesión para esta acción', {
      status: 401,
    })
  const data: ILetter = await req.json()

  try {
    //reutilizamos el letterSchema porque es basicamente igual
    const letter = letterSchema.parse(data)

    const createdCvAdapt = await prisma.cvAdapt.create({
      data: {
        content: letter.completion,
        rating: letter.rating,
        userId: session?.user.id!,
        profileId: letter.profile_used,
        offerId: letter.offer_used,
      },
      include: {
        offer: true,
      },
    })

    return NextResponse.json(createdCvAdapt)
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal')
  }
}
