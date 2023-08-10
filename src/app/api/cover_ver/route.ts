import { makecover } from '@/lib/makecover'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { StreamingTextResponse, LangChainStream } from 'ai'
import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'

//import { ChatOpenAI } from 'langchain/chat_models/openai'

export const runtime = 'edge'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  //validar si hay usuario
  // const session = await getServerSession(options)
  // if (!session?.user)
  //   return new NextResponse('Es necesario iniciar sesión para esta acción', {
  //     status: 401,
  //   })

  const {
    offer_name,
    offer,
    company_name,
    training,
    experience,
    abstract,
    language,
  } = await req.json()

  //validar que están todos los campos
  //gestionar ese error
  if (!offer || !experience || !training) {
    console.log('este es el error en el servidor')
    return NextResponse.json(
      {
        message: 'Error de contenido',
        description: 'Falta información para generar el contenido',
      },
      { status: 400 }
    )
    // return new NextResponse('Faltan información para generar el contenido', {
    //   status: 400,
    // })
  }

  const sanitizedOffer = offer.trim().replaceAll('\n', ' ')
  const sanitizedTraining = training.trim().replaceAll('\n', ' ')
  const sanitizedExperience = experience.trim().replaceAll('\n', ' ')
  const sanitizedAbstract = abstract
    ? abstract.trim().replaceAll('\n', ' ')
    : ''

  const { stream, handlers } = LangChainStream()

  const chain = makecover()

  try {
    //Ask a question
    chain.call(
      {
        language: language,
        offer_name: offer_name,
        offer: sanitizedOffer,
        company: company_name,
        experience: sanitizedExperience,
        training: sanitizedTraining,
        abstract: sanitizedAbstract,
      },
      [handlers]
    )

    return new StreamingTextResponse(stream)
  } catch (error) {
    return NextResponse.json(error)
  }
}
