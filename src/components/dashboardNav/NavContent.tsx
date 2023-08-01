import { ILettersList } from '@/app/dashboard/page'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { IProfiles } from '@/schema/letter.schema'
import Link from 'next/link'

interface IDrawerProps {
  letters: ILettersList[]
  profiles: IProfiles[]
}

function NavContent({ letters, profiles }: IDrawerProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem className="mb-6 " value="item-1">
        <AccordionTrigger className="text-xl font-semibold">
          Tus Cartas
        </AccordionTrigger>
        {letters.map((letter) => (
          <Link href={`/dashboard?letter=${letter.id}`} key={letter.id}>
            <AccordionContent className=" text-lg mb-5 px-5 pt-4 border-2 border-slate-400 rounded-xl">
              {letter.offer.offer_name}
            </AccordionContent>
          </Link>
        ))}
      </AccordionItem>
      <AccordionItem className="mb-12 space-y-6" value="item-2">
        <AccordionTrigger className="text-xl font-semibold">
          Tus Perfiles
        </AccordionTrigger>
        {profiles.map((profile) => (
          <Link href={`/dashboard?profile=${profile.id}`} key={profile.id}>
            <AccordionContent className=" text-lg mb-5 px-5 pt-4 border-2 border-slate-400 rounded-xl">
              {profile.profile_name}
            </AccordionContent>
          </Link>
        ))}
      </AccordionItem>
    </Accordion>
  )
}

export default NavContent
