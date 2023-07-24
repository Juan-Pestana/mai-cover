import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'
import { letterSchema, ILetter } from '@/schema/letter.schema'
import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  const data: ILetter = await req.json()

  console.log('la data de la carta', data)

  try {
    const letter = letterSchema.parse(data)

    //console.log('la letter se ha parseado correctamente')

    const createdLetter = await prisma.letter.create({
      data: {
        content: letter.completion,
        userId: session?.user.id!,
        profileId: letter.profile_used,
        offerId: letter.offer_used,
      },
      include: {
        offer: true,
      },
    })

    return NextResponse.json(createdLetter)
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal')
  }
}
