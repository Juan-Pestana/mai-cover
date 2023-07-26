import { makecover } from '@/lib/makecover'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { StreamingTextResponse, LangChainStream } from 'ai'

//import { ChatOpenAI } from 'langchain/chat_models/openai'

export const runtime = 'edge'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const { offer_name, offer, company_name, training, experience, abstract } =
    await req.json()

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
    console.log('error', error)
  }
}
