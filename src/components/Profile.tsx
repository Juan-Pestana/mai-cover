'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useStore } from './Store'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { IProfiles } from '@/schema/letter.schema'
import { useToast } from './ui/use-toast'

type Inputs = {
  profile_name: string
  abstract: string
  experience: string
  training: string
}

interface IProfileProps {
  pageType: string
  setShow?: Dispatch<SetStateAction<string>>
}

function Profile({ pageType, setShow }: IProfileProps) {
  const { updateCover, updateProfileUsed } = useStore((state) => state)

  const profile_preview = useStore((state) => state.profile_preview)

  const { toast } = useToast()

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
    watch,
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
    updateCover({
      profile_name: data.profile_name,
      abstract: data.abstract,
      experience: data.experience,
      training: data.training,
      company_name: '',
      offer_name: '',
      offer: '',
    })

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
          // si estamos en el dashboard actulizamos el actual
          if (pageType === 'form') {
            setError('profile_name', {
              type: 'custom',
              message: `Modifica el nombre de éste perfil si has hecho cambios, para crear uno nueva versión`,
            })
          }
          if (pageType === 'dashboard') {
            //actualizar el mismo perfil
            // pasando
            const res = await fetch('api/profile', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: profile_preview.id, ...data }),
            })

            if (res.ok) {
              //console.log(body)
              const updatedProfile = (await res.json()) as IProfiles

              setShow && setShow('profile')
              router.refresh()
              toast({
                title: `Se ha actualizado ${updatedProfile.profile_name} `,
              })
            }
          }
        } else {
          //ha usado un perfil anterior y es todo igual, no ha cambiado nada
          if (pageType === 'form') {
            updateProfileUsed(profile_preview.id)
            router.push('offer_form')
          }
          if (pageType === 'dashboard') {
            setShow && setShow('profile')
            router.refresh()
            toast({
              title: `No se han hecho cambios en ${profile_preview.profile_name} `,
            })
          }
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
          if (pageType === 'form') {
            const newProfile = (await res.json()) as IProfiles
            updateProfileUsed(newProfile.id)
            router.push('/offer_form')
          }
          if (pageType === 'dashboard') {
            const createdProfile = (await res.json()) as IProfiles
            //OJO PARA QUE ESTO FUNCIONE HAY QUE CAMBIAR LA FORMA DE RECOGER LOS PERFILES....
            setShow && setShow('profile')
            router.refresh()
            toast({
              title: `Se ha creado un nuevo perfil ${createdProfile.profile_name} `,
            })
          }
        }
      }
    }
  }

  return (
    <div className=" mx-auto w-full max-w-3xl py-5 px-5 bg-slate-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="profile_name">
            Nombra este perfil
          </label>
          <input
            id="profile_name"
            className="mt-2 w-full rounded-md p-2"
            placeholder="Mi perfil Marketing"
            {...register('profile_name', { required: true })}
          />
        </div>
        {errors.profile_name?.type === 'custom' && (
          <span className="text-red-500">{errors.profile_name.message}</span>
        )}
        {errors.profile_name?.type === 'required' && (
          <span className="text-red-500">This field is required</span>
        )}
        {profile_preview.id && (
          <span className="text-sm text-slate-500 italic">
            * Modifica el nombre para crear una nueva version, o mantenlo para
            actualizar la versión actual
          </span>
        )}
        <hr className="my-3" />
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="abstract">
            Abstract
          </label>
          <textarea
            id="abstract"
            className="mt-2 w-full rounded-md p-2"
            placeholder="Descríbete brevemente"
            {...register('abstract', { required: true })}
          />
          {errors.abstract?.type === 'required' && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="experience">
            Experiencia
          </label>
          <textarea
            id="experience"
            className="mt-2 w-full rounded-md p-2 h-40"
            placeholder="Pega aquí tu experiencia"
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
            placeholder="Pega aquí tu Formación"
            {...register('training', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          <div>
            {errors.training && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        {pageType === 'form' ? (
          <button
            className="w-full mt-4 bg-black py-3 text-slate-50 rounded-lg text-xl hover:bg-slate-800"
            type="submit"
          >
            Continuar
          </button>
        ) : (
          <button
            className="w-full mt-4 bg-black py-3 text-slate-50 rounded-lg text-xl hover:bg-slate-800"
            type="submit"
          >
            {profile_preview.profile_name === watch('profile_name')
              ? 'Actulizar'
              : 'Crear Nueva Version'}
          </button>
        )}
      </form>
    </div>
  )
}

export default Profile
