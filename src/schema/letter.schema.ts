import * as z from 'zod'

export const profileSchema = z.object({
  profile_name: z.string().nonempty(),
  abstract: z.string().nonempty(),
  training: z.string().nonempty().min(40),
  experience: z.string().nonempty().min(40),
})

export const offerSchema = z.object({
  offer: z.string().nonempty().min(40),
  company_name: z.string().nonempty(),
  offer_name: z.string().nonempty(),
})

export const letterSchema = z.object({
  profile_used: z.string().nonempty(),
  rating: z.number().min(1).max(5).optional(),
  completion: z.string().nonempty().min(40),
  offer_used: z.string().nonempty(),
})

export interface IProfiles extends IProfile {
  id: string
}

export type IProfile = z.TypeOf<typeof profileSchema>
export type IOffer = z.TypeOf<typeof offerSchema>
export type ILetter = z.TypeOf<typeof letterSchema>
