import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismaClient'

import { IOffer } from '@/schema/letter.schema'

export async function POST(req: Request) {
  const body: IOffer = await req.json()

  try {
    const newOffer = await prisma.offer.create({
      data: {
        company_name: body.company_name,
        offer_name: body.offer_name,
        offer: body.offer,
      },
    })

    return NextResponse.json(newOffer)
  } catch (error) {
    throw new Error('Error al crear oferta', { cause: error })
  }
}
