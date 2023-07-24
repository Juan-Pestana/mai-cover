'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useStore } from './Store'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { log } from 'console'
import { IProfiles } from '@/schema/letter.schema'
type Inputs = {
  profile_name: string
  abstract: string
  experience: string
  training: string
}

function Profile() {
  const {
    updateAbstract,
    updateExperience,
    updateTraining,
    updateProfileName,
    updateProfileUsed,
  } = useStore((state) => state)

  const profile_preview = useStore((state) => state.profile_preview)

  useEffect(() => {
    // router.refresh()
    // console.log(profile_preview)
    const { id, ...rest } = profile_preview
    reset(rest)
  }, [profile_preview])

  const router = useRouter()

  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      profile_name: profile_preview.profile_name,
      abstract: profile_preview.abstract,
      experience: profile_preview.experience,
      training: profile_preview.training,
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    updateProfileName(data.profile_name)
    updateAbstract(data.abstract)
    updateExperience(data.experience)
    updateTraining(data.training)

    if (!profile_preview.id) {
      //no ha seleccionado un perfil previo
      //create new profile
      const res = await fetch('api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        //console.log(body)
        const newProfile = (await res.json()) as IProfiles
        updateProfileUsed(newProfile.id)
        router.push('/offer_form')
      }
    } else {
      if (profile_preview.profile_name === data.profile_name) {
        if (
          profile_preview.abstract !== data.abstract ||
          profile_preview.experience !== data.experience ||
          profile_preview.training !== data.training
        ) {
          //ha actualizado el perfil, pero no le ha cambiado el nombre
          //lanzar error de nombre

          setError('profile_name', {
            type: 'custom',
            message: `Modifica el nombre de éste perfil si has hecho cambios, para crear uno nuevo perfil a partir de tu perfil de ${profile_preview.profile_name}`,
          })
        } else {
          //ha usado un perfil anterior y es todo igual, no ha cambiado nada
          updateProfileUsed(profile_preview.id)
          router.push('offer_form')
        }
      } else {
        //Es un nuevo perfil creado a partir de otro perfil
        //no enviar id para considerarlo un nuevo perfil
        const res = await fetch('api/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (res.ok) {
          //console.log(body)
          const newProfile = (await res.json()) as IProfiles
          updateProfileUsed(newProfile.id)
          router.push('/offer_form')
        }
      }
    }

    // if (profile_preview) router.push('/offer_form')
  }

  return (
    <div className=" mx-auto w-full max-w-3xl my-10 py-10 px-5 bg-slate-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="profile_name">
            Nombra este perfil
          </label>
          <input
            id="profile_name"
            className="mt-2 w-full rounded-md p-2"
            placeholder="Mi perfil Marketing"
            {...register('profile_name')}
          />
        </div>
        {errors.profile_name && (
          <span className="text-red-500">{errors.profile_name.message}</span>
        )}
        <hr />
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

        <button
          className="w-full mt-4 bg-blue-950 py-3 text-slate-50 rounded-lg text-xl"
          type="submit"
        >
          Continuar
        </button>
      </form>
    </div>
  )
}

export default Profile
