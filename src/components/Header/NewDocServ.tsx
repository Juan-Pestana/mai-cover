import { prisma } from '@/lib/prismaClient'
import React, { Suspense } from 'react'
import NewDoc from './NewDoc'

interface INewDocProps {
  userId: string
  role: string
}

const getDocsLeft = async (uId: string) => {
  const res = await prisma.user.findUnique({
    where: {
      id: uId,
    },
    select: {
      availableDocs: true,
    },
  })

  return res as { availableDocs: number }
}

async function NewDocServ({ userId, role }: INewDocProps) {
  const docsLeft = await getDocsLeft(userId)
  const { availableDocs } = docsLeft

  return <NewDoc docsLeft={availableDocs} role={role} />
}

export default NewDocServ
