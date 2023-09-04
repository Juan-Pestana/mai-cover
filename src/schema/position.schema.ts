import * as z from 'zod'

export const positionSchema = z.object({
  rating: z.number().min(1).max(5).optional(),
  content: z.string().nonempty(),
  industry: z.string().nonempty(),
  position: z.string().nonempty(),
  proyects: z.string().nonempty(),
})
export interface IPositions extends IPosition {
  id: string
}
export type IPosition = z.TypeOf<typeof positionSchema>
