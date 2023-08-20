import { Divide } from 'lucide-react'
import React from 'react'
import Stripe from 'stripe'
import PaymentCanceled from '@/components/pricing/PaymentCanceled'
import PaymentSuccess from '@/components/pricing/PaymentSuccess'

async function PaymentStatus_Page({
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  if (searchParams?.session_id) {
    // const stripe = require('stripe')(
    //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    // )
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2022-11-15',
      typescript: true,
    })
    const session = await stripe.checkout.sessions.retrieve(
      searchParams.session_id
    )
    if (session.status === 'complete') {
      return <PaymentSuccess />
    } else {
      return <PaymentCanceled />
    }
  }
}

export default PaymentStatus_Page
