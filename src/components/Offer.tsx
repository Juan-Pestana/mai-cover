'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useStore } from './Store'
import { useRouter } from 'next/navigation'

type Inputs = {
  company_name: string
  offer_title: string
  offer: string
}

function Offer() {
  const { updateCompanyName, updateOffer, updateOfferName, offer_name } =
    useStore((state) => state)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //console.log(data)
    updateCompanyName(data.company_name)
    updateOfferName(data.offer_title)
    updateOffer(data.offer)

    router.push('/cover_letter')
  }

  return (
    <div className="w-full max-w-3xl my-10 py-10 px-5 bg-slate-100 rounded-lg shadow-lg">
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
            {...register('company_name')}
          />
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
            {...register('offer_title', { required: true })}
          />
          {errors.offer_title && (
            <span className="text-red-500">This field is required</span>
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
            placeholder="pega aquí el texto de la oferta"
            {...register('offer', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          <div>
            {errors.offer && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <input
          className="w-full mt-4 bg-blue-950 py-3 text-slate-50 rounded-lg text-xl"
          type="submit"
          value="Generar Carta de Presentación"
        />
      </form>
    </div>
  )
}

export default Offer