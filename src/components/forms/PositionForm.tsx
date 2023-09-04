'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useStore } from '../Store'
import { useRouter } from 'next/navigation'
import { IOffer } from '@/schema/letter.schema'

type Inputs = {
  position: string
  industry: string
  proyects: string
}

function PositionForm() {
  const { updatePosition } = useStore((state) => state)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    updatePosition({
      industry: data.industry,
      position: data.position,
      proyects: data.proyects,
    })

    // const res = await fetch('api/offer', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // if (res.ok) {
    //   const newOffer = await res.json()

    //   updateOfferUsed(newOffer.id)
    // }

    router.push('/generate/position')
  }

  return (
    <div className="w-full max-w-3xl my-3 py-5 px-2 bg-slate-100 rounded-lg shadow-lg md:px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 ">
          {/* register your input into the hook by invoking the "register" function */}
          <div className="mb-3 flex-1">
            <label className="text-sm ml-2" htmlFor="offer_title">
              Nombre del puesto
            </label>
            <input
              type="text"
              id="position"
              className="mt-2 w-full rounded-md p-2"
              placeholder="Técnico de producto"
              {...register('position', { required: true })}
            />
            {errors.position && (
              <span className="text-red-500">
                Debes indicar la posición que ocupa el empleado
              </span>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="offer">
            Industria
          </label>
          <input
            id="industry"
            className=" mt-2 w-full rounded-md p-2"
            placeholder="Consultoría de desarrollo de software"
            {...register('industry', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          <div>
            {errors.industry && (
              <span className="text-red-500">
                Debes indicar la industria en la que se encueadra el puesto
              </span>
            )}
          </div>
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="offer">
            Algún proyecto o tarea destacable
          </label>
          <input
            id="offer"
            type="text"
            className=" mt-2 w-full rounded-md p-2"
            placeholder="Auditoría de seguridad...  "
            {...register('proyects', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          <div>
            {errors.proyects && (
              <span className="text-red-500">
                Debes indicar al menos un proyecto o taréa que te gustaría
                destacar.
              </span>
            )}
          </div>
        </div>

        <button
          className="w-full mt-4 bg-black py-3 text-slate-50 rounded-lg text-lg hover:bg-[#24292F]/80 md:text-xl"
          type="submit"
        >
          Generar Detalle de la Posición
        </button>
      </form>
    </div>
  )
}

export default PositionForm
