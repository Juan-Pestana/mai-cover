import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prismaClient'
import DocCounter from '@/components/adminDB/DocCounter'

const groupUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      _count: {
        select: {
          letters: true,
          cvAdapts: true,
          recomendations: true,
          feedbacks: true,
          positions: true,
        },
      },
    },
  })
  return users
}

const getUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      letters: true,
      feedbacks: true,
      cvAdapts: true,
      recomendations: true,
      positions: true,
      profiles: true,
      accounts: true,
    },
  })

  return users
}

async function AdminDashboardPage() {
  const session = await getServerSession(options)

  if (session?.user.role !== 'admin') {
    redirect('/api/auth/signin?callbackUrl=/dashboard')
  }

  const docCounterKeys = [
    'users',
    'letters',
    'feedbacks',
    'recomendations',
    'positions',
    'cvAdapts',
  ]

  return (
    <>
      <div className="relative flex-1 h-full flex bg-black">
        <aside className="hidden w-96 lg:block">
          <article className="relative w-full pb-10 flex flex-col h-full border-r-2 border-black bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <header className="p-4 font-bold text-lg flex justify-between  text-white ">
              <h2 className="text-2xl">Admin Dashboard</h2>
            </header>
          </article>
          {/* <GetLetters /> */}
        </aside>
        <main className="flex flex-col flex-1 min-h-full  border-1 border-black  bg-white lg:rounded-tl-3xl">
          <div className=" p-4 flex gap-5 flex-wrap">
            {docCounterKeys.map((doc) => (
              <DocCounter key={doc} count={doc} />
            ))}
          </div>
          <hr className="mx-5" />
        </main>
      </div>
    </>
  )
}

export default AdminDashboardPage
