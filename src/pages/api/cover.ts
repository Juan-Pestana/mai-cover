import { makecover } from '@/lib/makecover'
import type { NextApiRequest, NextApiResponse } from 'next'

//import { ChatOpenAI } from 'langchain/chat_models/openai'

//export const runtime = 'edge'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { offer_name, offer, company_name, training, experience, abstract } =
    req.body

  const sanitizedOffer = offer.trim().replaceAll('\n', ' ')
  const sanitizedTraining = training.trim().replaceAll('\n', ' ')
  const sanitizedExperience = experience.trim().replaceAll('\n', ' ')
  const sanitizedAbstract = abstract
    ? abstract.trim().replaceAll('\n', ' ')
    : ''

  const chain = makecover()

  try {
    //Ask a question
    const response = await chain.call({
      offer_name: offer_name,
      offer: sanitizedOffer,
      company: company_name,
      experience: sanitizedExperience,
      training: sanitizedTraining,
      abstract: sanitizedAbstract,
    })
    // ,[
    //   {
    //     handleLLMNewToken(token: string) {
    //       process.stdout.write(token);
    //     },
    //   },
    // ])
    console.log('response', response)
    res.status(200).json(response)
  } catch (error) {
    console.log('error', error)
  } finally {
    res.end()
  }
}
