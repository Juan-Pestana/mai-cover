'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from '../ui/use-toast'

function PaymentSuccess() {
  const router = useRouter()

  const { update } = useSession()

  const goAndRefresh = async () => {
    await update({ role: 'client' })
    router.refresh()
    router.push('/')
    toast({
      title: 'Perfil Actualizado',
      description:
        'Hemos actualizado tu perfil para poder acceder a todos los documentos',
    })
  }

  return (
    <div className="bg-gray-100 flex-1 flex items-center justify-center">
      <div className="bg-white p-6  md:mx-auto rounded-lg shadow-xl">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Compra realizada con éxito
          </h3>
          <p className="text-gray-600 my-2">
            Inspírate para crear tus documentos de HR
          </p>
          <p> Que tengas un buen día! </p>
          <div className="py-10 text-center">
            <button
              onClick={goAndRefresh}
              className="px-12 bg-black hover:bg-[#24292F]/80 text-white font-semibold py-3"
            >
              Canjear mi bono
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
