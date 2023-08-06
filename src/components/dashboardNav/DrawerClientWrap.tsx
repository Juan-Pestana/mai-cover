'use client'

import { useState } from 'react'
import Drawer from './Drawer'
import { ILettersList } from '@/app/dashboard/page'
import { IProfiles } from '@/schema/letter.schema'
import NavContent from './NavContent'

interface IDrawerProps {
  letters: ILettersList[]
  profiles: IProfiles[]
}

function DrawerClientWrap({ letters, profiles }: IDrawerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <NavContent
          letters={letters}
          profiles={profiles}
          setIsOpen={setIsOpen}
        />
      </Drawer>
      <div className=" absolute top-1 z-10 left-1 lg:hidden">
        <div>
          <button onClick={() => setIsOpen(true)}>abrir</button>
        </div>
      </div>
    </>
  )
}

export default DrawerClientWrap
