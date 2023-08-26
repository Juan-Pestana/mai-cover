'use client'

import { ILettersList } from '@/app/dashboard/page'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { IProfiles } from '@/schema/letter.schema'

import { useSearchParams, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { useStore } from '../Store'
import { IFeedbacks } from '@/schema/feeback.schema'

interface IDrawerProps {
  letters: ILettersList[]
  profiles: IProfiles[]
  feedbacks: IFeedbacks[]
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}

function NavContent({ letters, profiles, feedbacks, setIsOpen }: IDrawerProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const updateProfilePreview = useStore((state) => state.updateProfilePreview)

  const id = searchParams?.get('id')
  //const show = searchParams?.get('show')

  const linkBtn = (type: string, id: string) => {
    router.push(`/dashboard?show=${type}&id=${id}`)
    if (setIsOpen) {
      setIsOpen(false)
    }
  }

  const createBtn = () => {
    updateProfilePreview({
      id: '',
      profile_name: '',
      abstract: '',
      training: '',
      experience: '',
    })
    router.push('/profile_form')
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem className="mb-6 " value="item-1">
        <AccordionTrigger className="text-xl font-semibold">
          Tus Cartas
        </AccordionTrigger>
        {letters.map((letter) => (
          <AccordionContent key={letter.id}>
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black ${
                id === letter.id ? 'bg-white text-black' : null
              }`}
              onClick={() => linkBtn('letter', letter.id)}
            >
              {letter.offer.company_name}
            </button>
          </AccordionContent>
        ))}
      </AccordionItem>
      <AccordionItem className="mb-6" value="item-2">
        <AccordionTrigger className="text-xl font-semibold">
          Tus Perfiles
        </AccordionTrigger>

        {profiles.map((profile) => (
          <AccordionContent key={profile.id}>
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black ${
                id === profile.id ? 'bg-white text-black' : null
              }`}
              onClick={() => linkBtn('profile', profile.id)}
            >
              {profile.profile_name}
            </button>
          </AccordionContent>
        ))}
        <AccordionContent>
          <button
            className={`text-lg  px-5 py-4 border-2 border-slate-400 rounded-xl w-full hover:bg-white hover:text-black hover:border-white`}
            onClick={createBtn}
          >
            Crear nuevo perfil
          </button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="mb-6 " value="item-3">
        <AccordionTrigger className="text-xl font-semibold">
          Tus Feedbacks
        </AccordionTrigger>
        {feedbacks.map((feedback) => (
          <AccordionContent key={feedback.id}>
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black ${
                id === feedback.id ? 'bg-white text-black' : null
              }`}
              onClick={() => linkBtn('feedback', feedback.id)}
            >
              {feedback.position}
            </button>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  )
}

export default NavContent
