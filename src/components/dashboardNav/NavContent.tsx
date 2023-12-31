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
import { IRecomendations } from '@/schema/recomendation.schema'
import { IPositions } from '@/schema/position.schema'

interface IDrawerProps {
  letters: ILettersList[]
  profiles: IProfiles[]
  feedbacks: IFeedbacks[]
  recomendations: IRecomendations[]
  cvAdapts: ILettersList[]
  positions: IPositions[]
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}

function NavContent({
  letters,
  profiles,
  feedbacks,
  recomendations,
  cvAdapts,
  positions,
  setIsOpen,
}: IDrawerProps) {
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
      <AccordionItem className="mb-6" value="item-2">
        <AccordionTrigger className="text-xl font-semibold">
          Tus Perfiles
        </AccordionTrigger>

        {profiles.length ? (
          profiles.map((profile) => (
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
          ))
        ) : (
          <AccordionContent key="no profiles">
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black `}
            >
              No tienes perfiles
            </button>
          </AccordionContent>
        )}
        <AccordionContent>
          <button
            className={`text-lg  px-5 py-4 border-2 border-slate-400 rounded-xl w-full hover:bg-white hover:text-black hover:border-white`}
            onClick={createBtn}
          >
            Crear nuevo perfil
          </button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="mb-6 " value="item-1">
        <AccordionTrigger className="text-xl font-semibold">
          Cartas de Presentación
        </AccordionTrigger>
        {letters.length ? (
          letters.map((letter) => (
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
          ))
        ) : (
          <AccordionContent key="no letters">
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black `}
            >
              No tienes cartas
            </button>
          </AccordionContent>
        )}
      </AccordionItem>

      <AccordionItem className="mb-6 " value="item-3">
        <AccordionTrigger className="text-xl font-semibold">
          Feedbacks
        </AccordionTrigger>
        {feedbacks.length ? (
          feedbacks.map((feedback) => (
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
          ))
        ) : (
          <AccordionContent key="no feedback">
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black `}
            >
              No tienes feedbacks
            </button>
          </AccordionContent>
        )}
      </AccordionItem>
      <AccordionItem className="mb-6 " value="item-4">
        <AccordionTrigger className="text-xl font-semibold">
          Cartas de Recomendación
        </AccordionTrigger>
        {recomendations.length ? (
          recomendations.map((recomendation) => (
            <AccordionContent key={recomendation.id}>
              <button
                className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black ${
                  id === recomendation.id ? 'bg-white text-black' : null
                }`}
                onClick={() => linkBtn('recomendation', recomendation.id)}
              >
                {recomendation.position}
              </button>
            </AccordionContent>
          ))
        ) : (
          <AccordionContent key="no recomendations">
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black `}
            >
              No tienes cartas de recomendación
            </button>
          </AccordionContent>
        )}
      </AccordionItem>
      <AccordionItem className="mb-6 " value="item-5">
        <AccordionTrigger className="text-xl font-semibold">
          Sugerencias CV
        </AccordionTrigger>
        {cvAdapts.length ? (
          cvAdapts.map((cvAdapt) => (
            <AccordionContent key={cvAdapt.id}>
              <button
                className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black ${
                  id === cvAdapt.id ? 'bg-white text-black' : null
                }`}
                onClick={() => linkBtn('cvAdapt', cvAdapt.id)}
              >
                {cvAdapt.offer.company_name}
              </button>
            </AccordionContent>
          ))
        ) : (
          <AccordionContent key="no sugerencias CV">
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black `}
            >
              No tienes Sugerencias CV
            </button>
          </AccordionContent>
        )}
      </AccordionItem>
      <AccordionItem className="mb-6 " value="item-6">
        <AccordionTrigger className="text-xl font-semibold">
          Tus Posiciones
        </AccordionTrigger>
        {positions.length ? (
          positions.map((position) => (
            <AccordionContent key={position.id}>
              <button
                className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black ${
                  id === position.id ? 'bg-white text-black' : null
                }`}
                onClick={() => linkBtn('position', position.id)}
              >
                {position.position}
              </button>
            </AccordionContent>
          ))
        ) : (
          <AccordionContent key="no positions">
            <button
              className={`text-lg  text-left px-5  w-full rounded-lg hover:cursor-pointer hover:bg-slate-200 hover:text-black `}
            >
              No tienes posiciones
            </button>
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default NavContent
