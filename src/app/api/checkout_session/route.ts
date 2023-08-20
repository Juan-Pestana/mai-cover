import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'
import { NextResponse } from 'next/server'
import stripe from '../../../lib/getStripe'
import { nextUrl } from '@/lib/url'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  if (!session?.user) {
    return new NextResponse('Es necesario iniciar sesión para esta acción', {
      status: 401,
    })
  } else {
    try {
      const stripeSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        customer_email: session.user.email!,
        line_items: [
          {
            price: process.env.STRIPE_PRICE,
            quantity: 1,
          },
        ],
        metadata: {
          userId: session.user.id,
        },
        success_url: `${nextUrl}/payment_status/?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${nextUrl}/payment_status/?session_id={CHECKOUT_SESSION_ID}`,
      })
      return new Response(JSON.stringify({ url: stripeSession.url }))
    } catch (error) {
      console.log(error)
    }
  }
}
