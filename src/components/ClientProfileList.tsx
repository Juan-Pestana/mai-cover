'use client'

import { useStore } from './Store'

import { useState } from 'react'
import { IProfiles } from '@/schema/letter.schema'

interface IprofilesProps {
  profiles: IProfiles[]
}

function ClientProfileList({ profiles }: IprofilesProps) {
  const { updateProfilePreview } = useStore((state) => state)

  const [selected, setSelected] = useState<string>('')

  const selectProfile = (id: string) => {
    const selectedProfile = profiles.find((profile) => id === profile.id)
    setSelected(id)
    if (selectedProfile) {
      updateProfilePreview(selectedProfile)
    }
  }

  return (
    <div className="py-6 flex flex-wrap">
      {profiles.map((prof) => (
        <button
          onClick={() => selectProfile(prof.id)}
          key={prof.id}
          className={`px-6 py-2 border-slate-700 border-2 rounded-xl mx-2 my-2 ${
            selected === prof.id && 'bg-slate-800 text-slate-200'
          }`}
        >
          {prof.profile_name}
        </button>
      ))}
    </div>
  )
}

export default ClientProfileList
