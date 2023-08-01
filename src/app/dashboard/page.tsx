import DrawerClientWrap from '@/components/dashboardNav/DrawerClientWrap'
import { prisma } from '@/lib/prismaClient'
import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'
import NavContent from '@/components/dashboardNav/NavContent'

export interface ILettersList {
  id: string
  content: string
  offer: {
    id: string
    company_name: string
    offer_name: string
    offer: string
  }
  profile: {
    id: string
    profile_name: string
    abstract: string
    training: string
    experience: string
  }
}

async function getProfiles() {
  const session = await getServerSession(options)

  const res = await prisma.letter.findMany({
    where: {
      userId: session?.user.id,
    },
    select: {
      id: true,
      content: true,
      offer: {
        select: {
          id: true,
          company_name: true,
          offer_name: true,
          offer: true,
        },
      },
      profile: {
        select: {
          profile_name: true,
          id: true,
          abstract: true,
          training: true,
          experience: true,
        },
      },
    },
  })

  return res as ILettersList[]
}

async function Dashboard() {
  const letters = await getProfiles()
  //const profiles = await JSON.parse(res)

  const profArr = letters.map((letter) => letter.profile)
  const profiles = profArr.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  )

  return (
    <>
      <div className="relative flex-1 h-full flex bg-black">
        <DrawerClientWrap letters={letters} profiles={profiles} />
        <aside className="hidden w-96 lg:block ">
          <article className="relative w-full pb-10 flex flex-col h-full border-r-2 border-black bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <header className="p-4 font-bold text-lg flex justify-between  text-white ">
              <h2 className="text-2xl">Documentos</h2>
            </header>
            {letters.length ? (
              <nav className="px-5 space-y-6 mt-6 text-white">
                <NavContent profiles={profiles} letters={letters} />
              </nav>
            ) : (
              <div className="flex h-full items-center justify-center px-5">
                <h2 className="text-white text-center text-2xl leading-relaxed">
                  No tienes documentos todavía
                </h2>
              </div>
            )}
          </article>
          {/* <GetLetters /> */}
        </aside>
        <main className="flex flex-col flex-1  border-1 border-black  bg-white lg:rounded-tl-3xl">
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <article className="p-10 border-2 border-red-500">
              aqui va una parte
            </article>
          </div>
          <footer className="h-16 flex items-center justify-around">
            <div>Perfil</div>
            <div>Oferta</div>
            <div>Carta</div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Dashboard
