'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useStore } from './Store'
import { useRouter } from 'next/navigation'
import { IOffer } from '@/schema/letter.schema'

type Inputs = {
  company_name: string
  offer_name: string
  offer: string
}

function Offer() {
  const { updateCompanyName, updateOffer, updateOfferName, updateOfferUsed } =
    useStore((state) => state)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //console.log(data)
    updateCompanyName(data.company_name)
    updateOfferName(data.offer_name)
    updateOffer(data.offer)

    const res = await fetch('api/offer', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      const newOffer = await res.json()

      updateOfferUsed(newOffer.id)
    }

    router.push('/cover_stream')
  }

  return (
    <div className="w-full max-w-3xl my-10 py-10 px-2 bg-slate-100 rounded-lg shadow-lg md:px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="company_name">
            Nombre de la empresa
          </label>
          <input
            type="text"
            id="company_name"
            className="mt-2 w-full rounded-md p-2"
            placeholder="ACME S.L."
            {...register('company_name', { required: true })}
          />
          {errors.company_name && (
            <span className="text-red-500">
              Debes indicar el nombre de la empresa
            </span>
          )}
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="offer_title">
            Nombre del puesto
          </label>
          <input
            type="text"
            id="offer_title"
            className="mt-2 w-full rounded-md p-2"
            placeholder="Ingeniero de Producto"
            {...register('offer_name', { required: true })}
          />
          {errors.offer_name && (
            <span className="text-red-500">
              Debes indicar el nombre del puesto
            </span>
          )}
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="offer">
            Descripción de la oferta
          </label>
          <textarea
            id="offer"
            className=" mt-2 w-full rounded-md p-2 h-60"
            placeholder="Pega aquí el texto de la oferta"
            {...register('offer', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          <div>
            {errors.offer && (
              <span className="text-red-500">
                Debes indicar la descripción de la oferta
              </span>
            )}
          </div>
        </div>

        <button
          className="w-full mt-4 bg-black py-3 text-slate-50 rounded-lg text-lg hover:bg-slate-800 md:text-xl"
          type="submit"
        >
          Generar Carta
        </button>
      </form>
    </div>
  )
}

export default Offer
