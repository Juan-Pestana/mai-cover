import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'
import { letterSchema, ILetter } from '@/schema/letter.schema'
import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  const data: ILetter = await req.json()

  console.log('la sesion en el servidor', session)

  try {
    const letter = letterSchema.parse(data)

    //console.log('la letter se ha parseado correctamente')

    const createdLetter = await prisma.letter.create({
      data: {
        content: letter.completion,
        userId: session?.user.id!,
        offer: {
          create: {
            company_name: letter.company_name,
            offer_name: letter.offer_name,
            offer: letter.offer,
          },
        },
        profile: {
          create: {
            //ojo que hemos hecho una trampa en abstract,
            //TO DO hacer abstract obligatorio en el schema
            abstract: letter.abstract!,
            experience: letter.experience,
            training: letter.training,
            userId: session?.user.id!,
          },
        },
      },
    })

    return NextResponse.json(createdLetter)
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal', { status: 400 })
  }
}
