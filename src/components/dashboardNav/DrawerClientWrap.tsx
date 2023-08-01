'use client'

import { useState } from 'react'
import Drawer from './Drawer'
import { ILettersList } from '@/app/dashboard/page'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { IProfiles } from '@/schema/letter.schema'
import { Divide } from 'lucide-react'

interface IDrawerProps {
  letters: ILettersList[]
  profiles: IProfiles[]
}

function DrawerClientWrap({ letters, profiles }: IDrawerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="mb-12 space-y-6">
          <h3 className="text-xl font-semibold">Tus Cartas</h3>
          {letters.map((letter) => (
            <div
              className="px-5 py-2 border-2 border-slate-400 rounded-xl"
              key={letter.id}
            >
              {letter.offer.offer_name}
            </div>
          ))}
        </div>
        <div className="mb-12 space-y-6">
          <h3 className="text-xl font-semibold">Tus Perfiles</h3>
          {profiles.map((profile) => (
            <div
              className="px-5 py-2 border-2 border-slate-400 rounded-xl"
              key={profile.id}
            >
              {profile.profile_name}
            </div>
          ))}
        </div>
      </Drawer>
      <div className=" absolute top-1 left-1 lg:hidden">
        <div>
          <button onClick={() => setIsOpen(true)}>abrir</button>
        </div>
      </div>
    </>
  )
}

export default DrawerClientWrap
