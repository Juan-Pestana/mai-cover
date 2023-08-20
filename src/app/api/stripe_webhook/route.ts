import { headers } from 'next/headers'

import stripe from '../../../lib/getStripe'
import Stripe from 'stripe'
import { prisma } from '@/lib/prismaClient'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === 'checkout.session.completed') {
    // Retrieve the subscription details from Stripe.

    // const subscription = await stripe.subscriptions.retrieve(
    //   session.subscription as string
    // )

    // Update the user stripe into in our database.
    // Since this is the initial subscription, we need to update
    // the subscription id and customer id.

    try {
      if (session.metadata?.userId) {
        const payment = await prisma.payment.create({
          data: {
            stripeSessionId: session.id,
            subtotal: session.amount_subtotal!,
            userId: session.metadata?.userId!,
            status: session.status!,
          },
        })

        if (payment) {
          await prisma.user.update({
            where: {
              id: session.metadata?.userId!,
            },
            data: {
              availableDocs: {
                increment: 15,
              },
              role: 'client',
            },
          })
        }
      } else {
        console.log('la session sin metadata.userId', session)
      }
    } catch (error) {
      console.error(error)
    }

    // await db.user.update({
    //   where: {
    //     id: session?.metadata?.userId,
    //   },
    //   data: {
    //     stripeSubscriptionId: subscription.id,
    //     stripeCustomerId: subscription.customer as string,
    //     stripePriceId: subscription.items.data[0].price.id,
    //     stripeCurrentPeriodEnd: new Date(
    //       subscription.current_period_end * 1000
    //     ),
    //   },
    // })
  }

  return new Response(null, { status: 200 })
}
