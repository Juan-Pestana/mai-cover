'use client'
import { IProfiles } from '@/schema/letter.schema'
import { ScrollArea } from '../ui/scroll-area'
import { montserrat } from '@/app/fonts/fonts'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import Profile from '../Profile'
import { useStore } from '../Store'

interface IprofileDBprops {
  profile: IProfiles
}

function ProfileDB({ profile }: IprofileDBprops) {
  const [show, setShow] = useState<string>('profile')
  const { updateProfilePreview } = useStore((state) => state)

  const editProfile = () => {
    updateProfilePreview(profile)
    setShow('edit')
  }

  return (
    <main className="flex flex-col flex-1 min-h-full  border-1 border-black  bg-white lg:rounded-tl-3xl">
      <div className="flex-1 h-full flex flex-col items-center  justify-end overflow-hidden">
        {show === 'profile' ? (
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
          className={`${show === 'edit' && 'bg-black text-white'}`}
          onClick={() => editProfile()}
        >
          Editar
        </button>
        <button
          className={`${show === 'offer' && 'bg-black text-white'}`}
          onClick={() => console.log('usar este perfil')}
        >
          Usar perfil
        </button>
      </footer>
    </main>
  )
}

export default ProfileDB
