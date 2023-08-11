'use client'

import { useState } from 'react'
import Drawer from './Drawer'
import { ILettersList } from '@/app/dashboard/page'
import { IProfiles } from '@/schema/letter.schema'
import { RiSideBarFill } from 'react-icons/ri'
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
      <div
        className={`absolute top-1 z-10 left-1 lg:hidden ${
          isOpen ? 'hidden' : null
        }`}
      >
        <div className="block h-8 w-8 ">
          <button
            className="h-full w-full text-slate-700"
            onClick={() => setIsOpen(true)}
          >
            <RiSideBarFill className="h-full w-full" />
          </button>
        </div>
      </div>
    </>
  )
}

export default DrawerClientWrap
