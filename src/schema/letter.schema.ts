import * as z from 'zod'

export const profileSchema = z.object({
  abstract: z.string().optional(),
  training: z.string().nonempty().min(40),
  experience: z.string().nonempty().min(40),
})

export const offerSchema = z.object({
  offer: z.string().nonempty().min(40),
  company_name: z.string().nonempty(),
  offer_name: z.string().nonempty(),
})

export const letterSchema = profileSchema.merge(offerSchema).extend({
  completion: z.string().nonempty().min(40),
})

export type IProfile = z.TypeOf<typeof profileSchema>
export type IOffer = z.TypeOf<typeof offerSchema>
export type ILetter = z.TypeOf<typeof letterSchema>
