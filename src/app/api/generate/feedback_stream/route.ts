import { makecover } from '@/lib/makecover'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { StreamingTextResponse, LangChainStream } from 'ai'
import { makeFeedback } from '@/lib/makeFeedback'

//import { ChatOpenAI } from 'langchain/chat_models/openai'

export const runtime = 'edge'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  //validar si hay usuario

  const { area, competences, develop, position, proyects, language } =
    await req.json()

  //validar que están todos los campos
  //gestionar ese error
  if (!competences || !proyects || !develop) {
    console.log('este es el error en el servidor')
    return NextResponse.json(
      {
        message: 'Error de contenido',
        description: 'Falta información para generar el feedback',
      },
      { status: 400 }
    )
  }

  const sanitizedCompetences = competences.trim().replaceAll('\n', ' ')
  const sanitizedProyects = proyects.trim().replaceAll('\n', ' ')
  const sanitizedDevelop = develop.trim().replaceAll('\n', ' ')
  const sanitizedPosition = position
    ? position.trim().replaceAll('\n', ' ')
    : ''

  const { stream, handlers } = LangChainStream()

  const chain = makeFeedback()

  try {
    //Ask a question
    chain.call(
      {
        language: language,
        area: area,
        competences: sanitizedCompetences,
        proyects: sanitizedProyects,
        develop: sanitizedDevelop,
        position: sanitizedPosition,
      },
      [handlers]
    )

    return new StreamingTextResponse(stream)
  } catch (error) {
    return NextResponse.json(error)
  }
}
