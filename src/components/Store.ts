import { create } from 'zustand'

import { IProfiles } from '@/schema/letter.schema'

type State = {
  profile_name: string
  abstract: string
  experience: string
  training: string
  company_name: string
  offer_name: string
  offer: string
  profile_preview: IProfiles
  profile_used: string
  offer_used: string
}

type Action = {
  updateProfileName: (profile_name: State['profile_name']) => void
  updateAbstract: (abstract: State['abstract']) => void
  updateExperience: (experience: State['experience']) => void
  updateTraining: (training: State['training']) => void
  updateCompanyName: (company_name: State['company_name']) => void
  updateOfferName: (offer_name: State['offer_name']) => void
  updateOffer: (offer: State['offer']) => void
  updateProfilePreview: (profile_preview: State['profile_preview']) => void
  updateProfileUsed: (profile_used: State['profile_used']) => void
  updateOfferUsed: (offer_used: State['offer_used']) => void
}

export const useStore = create<State & Action>((set) => ({
  profile_name: '',
  abstract: '',
  experience: '',
  training: '',
  company_name: '',
  offer_name: '',
  offer: '',
  profile_preview: {
    id: '',
    profile_name: '',
    abstract: '',
    training: '',
    experience: '',
  },
  profile_used: '',
  offer_used: '',
  updateProfileName: (profile_name) =>
    set(() => ({ profile_name: profile_name })),
  updateAbstract: (abstract) => set(() => ({ abstract: abstract })),
  updateExperience: (experience) => set(() => ({ experience: experience })),
  updateTraining: (training) => set(() => ({ training: training })),
  updateCompanyName: (company_name) =>
    set(() => ({ company_name: company_name })),
  updateOfferName: (offer_name) => set(() => ({ offer_name: offer_name })),
  updateOffer: (offer) => set(() => ({ offer: offer })),
  updateProfilePreview: (profile_preview) => set(() => ({ profile_preview })),
  updateProfileUsed: (profile_used) =>
    set(() => ({ profile_used: profile_used })),
  updateOfferUsed: (offer_used) => set(() => ({ offer_used: offer_used })),
}))
