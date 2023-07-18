'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useStore } from './Store'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
type Inputs = {
  abstract: string
  experience: string
  training: string
}

function Profile() {
  const { updateAbstract, updateExperience, updateTraining } = useStore(
    (state) => state
  )

  const { data: session } = useSession()

  console.log('la sesión en el cliente', session)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateAbstract(data.abstract)
    updateExperience(data.experience)
    updateTraining(data.training)

    router.push('/offer_form')
  }

  return (
    <div className="w-full max-w-3xl my-10 py-10 px-5 bg-slate-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="abstract">
            Abstract
          </label>
          <textarea
            id="abstract"
            className="mt-2 w-full rounded-md p-2"
            placeholder="Descríbete brebemente"
            {...register('abstract')}
          />
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="experience">
            Experiencia
          </label>
          <textarea
            id="experience"
            className="mt-2 w-full rounded-md p-2 h-40"
            placeholder="pega aquí tu experiencia"
            {...register('experience', { required: true })}
          />
          {errors.experience && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="experience">
            Formación
          </label>
          <textarea
            id="training"
            className=" mt-2 w-full rounded-md p-2 h-40"
            placeholder="pega aquí tu Formación"
            {...register('training', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          <div>
            {errors.training && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <input
          className="w-full mt-4 bg-blue-950 py-3 text-slate-50 rounded-lg text-xl"
          type="submit"
          value="Siguiente"
        />
      </form>
    </div>
  )
}

export default Profile
