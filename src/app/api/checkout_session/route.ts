import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'
import { NextResponse } from 'next/server'
import stripe from '../../../lib/getStripe'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  if (!session?.user)
    return new NextResponse('Es necesario iniciar sesión para esta acción', {
      status: 401,
    })

  try {
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price: process.env.STRIPE_PRICE,
          quantity: 1,
        },
      ],
      success_url: `http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}`,
    })
    return new Response(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    console.log(error)
  }
}
