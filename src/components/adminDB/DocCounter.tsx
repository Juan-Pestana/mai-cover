import { prisma } from '@/lib/prismaClient'
import React from 'react'

//type Counter = {[key: string]:[key: string]: string | Promise<number>}

interface Doctype {
  count: () => Promise<number>
  color: string
  text: string
}

interface Icounter {
  [key: string]: Doctype
}

const counter: Icounter = {
  users: {
    count: async () => await prisma.user.count(),
    color: 'bg-blue-600',
    text: 'Users',
  },
  letters: {
    count: async () => await prisma.letter.count(),
    color: 'bg-green-600',
    text: 'Cartas',
  },
  feedbacks: {
    count: async () => await prisma.feedback.count(),
    color: 'bg-yellow-600',
    text: 'Feedbacks',
  },
  recomendations: {
    count: async () => await prisma.recomendation.count(),
    color: 'bg-red-600',
    text: 'Recomend',
  },
  positions: {
    count: async () => await prisma.position.count(),
    color: 'bg-purple-600',
    text: 'Puestos',
  },
  cvAdapts: {
    count: async () => await prisma.position.count(),
    color: 'bg-teal-600',
    text: 'Sugerencas CV',
  },
}

interface IDocCounterProps {
  count: string
}

async function DocCounter({ count }: IDocCounterProps) {
  const number = await counter[count].count()
  const text = counter[count].text
  const color = counter[count].color

  return (
    <div
      className={`h-34 flex-1 min-w-[150px]  text-white rounded-lg p-3 md:max-w-[25%] lg:h-44 ${color}`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl">{text}</h3>
        </div>

        <div>
          <p className="text-right text-4xl px-8">{number}</p>
        </div>
      </div>
    </div>
  )
}

export default DocCounter
