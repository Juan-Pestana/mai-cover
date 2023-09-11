'use client'

import React from 'react'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

function BuyButton() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()

  async function onSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true)

    toast({
      title: 'El boton de compra ha sido deshabilitado',
      description:
        'Durante las semanas de Testing el boton de compra ha sido deshabilidado',
    })

    // Get a Stripe session URL.
    // const response = await fetch('/api/checkout_session', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })

    // if (!response?.ok) {
    //   if (response.status === 401) {
    //     const resp = await response.json()
    //     toast({
    //       title: resp.message,
    //       variant: 'destructive',
    //     })
    //     router.push('/signin')
    //     return
    //   } else {
    //     return toast({
    //       title: 'Algo ha salido mal.',
    //       description: 'Actualiza la página e inténtalo de nuevo.',
    //       variant: 'destructive',
    //     })
    //   }
    // }

    // // Redirect to the Stripe session.
    // // This could be a checkout page for initial upgrade.
    // // Or portal to manage existing subscription.
    // const session = await response.json()
    // if (session) {
    //   window.location.href = session.url
    // }

    setIsLoading(false)
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <button
        disabled={isLoading}
        type="submit"
        className="mt-10 block w-full bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Compra tu Bono
      </button>
    </form>
  )
}

export default BuyButton
