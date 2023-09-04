import { NextResponse } from 'next/server'
import { StreamingTextResponse, LangChainStream } from 'ai'
import { makePosition } from '@/lib/makePosition'

//import { ChatOpenAI } from 'langchain/chat_models/openai'

export const runtime = 'edge'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  //validar si hay usuario

  const { industry, position, proyects, language } = await req.json()

  //validar que están todos los campos
  //gestionar ese error
  if (!industry || !proyects || !position) {
    console.log('este es el error en el servidor')
    return NextResponse.json(
      {
        message: 'Error de contenido',
        description:
          'Falta información para generar la descripción de la posición',
      },
      { status: 400 }
    )
  }

  const sanitizedIndustry = industry.trim().replaceAll('\n', ' ')
  const sanitizedProyects = proyects.trim().replaceAll('\n', ' ')
  const sanitizedPosition = position.trim().replaceAll('\n', ' ')

  const { stream, handlers } = LangChainStream()

  const chain = makePosition()

  try {
    //Ask a question
    chain.call(
      {
        language: language,
        industry: sanitizedIndustry,
        proyect: sanitizedProyects,
        position: sanitizedPosition,
      },
      [handlers]
    )

    return new StreamingTextResponse(stream)
  } catch (error) {
    return NextResponse.json(error)
  }
}
