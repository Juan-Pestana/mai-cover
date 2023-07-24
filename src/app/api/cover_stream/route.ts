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

  const encoder = new TextEncoder()
  const stream = new TransformStream()
  const writer = stream.writable.getWriter()

  const sanitizedOffer = offer.trim().replaceAll('\n', ' ')
  const sanitizedTraining = training.trim().replaceAll('\n', ' ')
  const sanitizedExperience = experience.trim().replaceAll('\n', ' ')
  const sanitizedAbstract = abstract
    ? abstract.trim().replaceAll('\n', ' ')
    : ''

  const handleNewToken = async (token: any) => {
    await writer.ready
    writer.write(encoder.encode(`data: ${token}\n\n`))
  }

  const handleTokenEnd = async () => {
    await writer.ready
    await writer.write(encoder.encode(`data: [CLOSE]\n\n`))
    await writer.close()
  }

  const handleTokenError = async (error: any) => {
    await writer.ready
    await writer.abort(error)
  }

  const chain = makecover()

  try {
    //Ask a question
    await chain.call(
      {
        offer_name: offer_name,
        offer: sanitizedOffer,
        company: company_name,
        experience: sanitizedExperience,
        training: sanitizedTraining,
        abstract: sanitizedAbstract,
      },
      [
        {
          handleLLMNewToken(token: string) {
            handleNewToken(token)
          },
        },
        {
          handleChainEnd() {
            handleTokenEnd()
          },
        },
        {
          handleLLMError(err) {
            handleTokenError(err)
          },
        },
      ]
    )

    return new NextResponse(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        //added this to try to fix connection issues
        'Content-Encoding': 'none',
        // Important to set no-transform to avoid compression, which will delay
        // writing response chunks to the client.
        // See https://github.com/vercel/next.js/issues/9965
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.log('error', error)
  }
}
