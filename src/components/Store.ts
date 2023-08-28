import { create } from 'zustand'
import { produce } from 'immer'

import { IProfiles } from '@/schema/letter.schema'

enum coverFields {
  profile_name,
  abstract,
  experience,
  training,
  company_name,
  offer_name,
  offer,
}

type State = {
  recomendation: {
    position: string
    area: string
    proyects: string
    competences: string
  }
  feedback: {
    position: string
    area: string
    proyects: string
    competences: string
    develop: string
  }
  coverLetter: {
    profile_name: string
    abstract: string
    experience: string
    training: string
    company_name: string
    offer_name: string
    offer: string
  }

  profile_preview: IProfiles
  profile_used: string
  offer_used: string
}

type Action = {
  updateRecomendation: (feedback: State['recomendation']) => void
  updateFeedback: (feedback: State['feedback']) => void
  updateCover: (coverLetter: State['coverLetter']) => void
  updateProfilePreview: (profile_preview: State['profile_preview']) => void
  updateProfileUsed: (profile_used: State['profile_used']) => void
  updateOfferUsed: (offer_used: State['offer_used']) => void
}

export const useStore = create<State & Action>((set) => ({
  recomendation: {
    position: '',
    area: '',
    proyects: '',
    competences: '',
  },
  feedback: {
    position: '',
    area: '',
    proyects: '',
    competences: '',
    develop: '',
  },
  coverLetter: {
    profile_name: '',
    abstract: '',
    experience: '',
    training: '',
    company_name: '',
    offer_name: '',
    offer: '',
  },

  profile_preview: {
    id: '',
    profile_name: '',
    abstract: '',
    training: '',
    experience: '',
  },
  profile_used: '',
  offer_used: '',

  updateProfilePreview: (profile_preview) => set(() => ({ profile_preview })),
  updateProfileUsed: (profile_used) =>
    set(() => ({ profile_used: profile_used })),
  updateOfferUsed: (offer_used) => set(() => ({ offer_used: offer_used })),
  updateCover: (coverLetter) => set(() => ({ coverLetter: coverLetter })),
  updateFeedback: (feedback) => set(() => ({ feedback: feedback })),
  updateRecomendation: (recomendation) =>
    set(() => ({ recomendation: recomendation })),
}))
