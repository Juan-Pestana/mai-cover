import * as z from 'zod'

export const recomendationSchema = z.object({
  rating: z.number().min(1).max(5).optional(),
  content: z.string().nonempty(),
  area: z.string().nonempty(),
  competences: z.string().nonempty(),
  position: z.string().nonempty(),
  proyects: z.string().nonempty(),
})
export interface IRecomendations extends IRecomendation {
  id: string
}
export type IRecomendation = z.TypeOf<typeof recomendationSchema>
