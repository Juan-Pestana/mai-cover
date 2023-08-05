'use client'

import { ILettersList } from '@/app/dashboard/page'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { IProfiles } from '@/schema/letter.schema'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

interface IDrawerProps {
  letters: ILettersList[]
  profiles: IProfiles[]
  id: string
  setIsOpen?: Dispatch<SetStateAction<boolean>>
  show: string
}

function NavContent({ letters, profiles, id, setIsOpen }: IDrawerProps) {
  const router = useRouter()

  const linkBtn = (type: string, id: string) => {
    router.push(`/dashboard?show=${type}&id=${id}`)
    if (setIsOpen) {
      setIsOpen(false)
    }
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
              className={`text-lg  px-5 py-4 border-2 border-slate-400 rounded-xl w-full ${
                id === letter.id ? 'bg-white text-black' : null
              }`}
              onClick={() => linkBtn('letter', letter.id)}
            >
              {letter.offer.offer_name}
            </button>
          </AccordionContent>
        ))}
      </AccordionItem>
      <AccordionItem className="mb-12 space-y-6" value="item-2">
        <AccordionTrigger className="text-xl font-semibold">
          Tus Perfiles
        </AccordionTrigger>
        {profiles.map((profile) => (
          <AccordionContent key={profile.id}>
            <button
              className={`text-lg  px-5 py-4 border-2 border-slate-400 rounded-xl w-full ${
                id === profile.id ? 'bg-white text-black' : null
              }`}
              onClick={() => linkBtn('profile', profile.id)}
            >
              {profile.profile_name}
            </button>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  )
}

export default NavContent
