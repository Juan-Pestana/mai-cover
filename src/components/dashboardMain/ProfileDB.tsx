'use client'
import { IProfiles } from '@/schema/letter.schema'
import { ScrollArea } from '../ui/scroll-area'
import { montserrat } from '@/app/fonts/fonts'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import Profile from '../Profile'
import { useStore } from '../Store'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { RiEdit2Line, RiUserSharedLine } from 'react-icons/ri'
import { mainModule } from 'process'

interface IprofileDBprops {
  profile: IProfiles | undefined
  edit: string | undefined
}

function ProfileDB({ profile, edit }: IprofileDBprops) {
  const [show, setShow] = useState<string>('profile')
  const { updateProfilePreview } = useStore((state) => state)
  const {
    updateAbstract,
    updateExperience,
    updateTraining,
    updateProfileName,
    updateProfileUsed,
  } = useStore((state) => state)

  const router = useRouter()
  const { toast } = useToast()

  const editProfile = () => {
    if (profile) {
      updateProfilePreview(profile)
      router.push(`/dashboard?show=profile&id=${profile.id}&edit=true`)
    }
  }

  const thisProfile = () => {
    if (profile) {
      updateProfileName(profile.profile_name)
      updateAbstract(profile.abstract)
      updateExperience(profile.experience)
      updateTraining(profile.training)
      updateProfileUsed(profile.id)

      router.push('/offer_form')
      toast({ title: `Perfil: ${profile.profile_name} seleccionado` })
    }
  }

  if (!profile) {
    return (
      <main className="flex flex-col flex-1 min-h-full  border-1 border-black  bg-white lg:rounded-tl-3xl">
        <div className="flex-1 h-full flex flex-col items-center  justify-end overflow-hidden">
          {' '}
          No tienes Perfiles por el momento
        </div>
      </main>
    )
  }

  return (
    <main className="flex flex-col flex-1 min-h-full  border-1 border-black  bg-white lg:rounded-tl-3xl">
      <div className="flex-1 h-full flex flex-col items-center  justify-end overflow-hidden">
        {edit !== 'true' ? (
          <ScrollArea className="p-2 border-2 max-w-2xl h-[80vh] border-zinc-200 lg:h-[800px]">
            <div className="leading-relaxed p-5">
              <h2 className={`${montserrat.className} text-2xl text-center`}>
                Perfil: {profile.profile_name}
              </h2>
            </div>
            <hr className="mb-5" />
            <p className="text-xl font-semibold">Abstract:</p>
            <p className="mb-3 text-xl">{profile.abstract}</p>
            <p className="text-xl font-semibold">Experiencia:</p>
            <ReactMarkdown
              className={`prose whitespace-pre-wrap lg:text-lg leading-7 mb-3`}
            >
              {profile.experience}
            </ReactMarkdown>
            <p className="text-xl font-semibold">Formación:</p>
            <ReactMarkdown
              className={`prose whitespace-pre-wrap lg:text-lg leading-7 mb-3`}
            >
              {profile.training}
            </ReactMarkdown>
          </ScrollArea>
        ) : (
          <div className="w-full">
            <Profile pageType="dashboard" setShow={setShow} />
          </div>
        )}
      </div>
      <footer className="h-16 w-2/3 mx-auto flex items-center justify-around max-w-2xl">
        <button
          className={`flex flex-col items-center px-2 py-2 rounded-lg ${
            show === 'edit' && 'bg-black text-white'
          } hover:text-white hover:bg-black`}
          onClick={() => editProfile()}
        >
          <RiEdit2Line className="text-center h-5 w-5 " />
          Editar
        </button>
        <button
          className="flex flex-col items-center px-2 py-2 rounded-lg hover:text-white hover:bg-black"
          onClick={() => thisProfile()}
        >
          <RiUserSharedLine className="text-center h-5 w-5" />
          Usar perfil
        </button>
      </footer>
    </main>
  )
}

export default ProfileDB
