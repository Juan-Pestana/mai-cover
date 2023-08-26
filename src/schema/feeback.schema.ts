import * as z from 'zod'

export const feedbackSchema = z.object({
  rating: z.number().min(1).max(5).optional(),
  content: z.string().nonempty(),
  area: z.string().nonempty(),
  competences: z.string().nonempty(),
  develop: z.string().nonempty(),
  position: z.string().nonempty(),
  proyects: z.string().nonempty(),
})
export interface IFeedbacks extends IFeedback {
  id: string
}
export type IFeedback = z.TypeOf<typeof feedbackSchema>
