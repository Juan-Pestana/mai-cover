import DrawerClientWrap from '@/components/dashboardNav/DrawerClientWrap'
import { prisma } from '@/lib/prismaClient'
import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'
import NavContent from '@/components/dashboardNav/NavContent'
import LetterDB from '@/components/dashboardMain/LetterDB'
import ProfileDB from '@/components/dashboardMain/ProfileDB'
import { IProfiles } from '@/schema/letter.schema'
import { ScrollArea } from '@/components/ui/scroll-area'
import { redirect } from 'next/navigation'

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

interface IDocs {
  letters: ILettersList[]
  profiles: IProfiles[]
}

async function getDocs() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  }

  const res = await prisma.user.findUnique({
    where: {
      email: session?.user.email!,
    },
    select: {
      letters: {
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
              id: true,
              profile_name: true,
              abstract: true,
              experience: true,
              training: true,
            },
          },
        },
      },
      profiles: {
        select: {
          id: true,
          profile_name: true,
          abstract: true,
          experience: true,
          training: true,
        },
      },
    },
  })
  return res as IDocs
}

async function Dashboard({
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  const docs = await getDocs()

  // console.log(docs)

  const { profiles, letters } = docs

  // const profArr = letters.map((letter) => letter.profile)
  // const profiles = profArr.filter(
  //   (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  // )

  let show = ''
  let id = ''
  let edit = ''

  if (searchParams?.show) {
    show = searchParams.show!
    id = searchParams.id!
    if (searchParams.edit) {
      edit = searchParams.edit
    }
  } else {
    show = 'letter'
    id = letters[0].id
    edit = ''
  }

  return (
    <>
      <div className="relative flex-1 h-full flex bg-black">
        <DrawerClientWrap letters={letters} profiles={profiles} />
        <aside className="hidden w-96 lg:block">
          <article className="relative w-full pb-10 flex flex-col h-full border-r-2 border-black bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <header className="p-4 font-bold text-lg flex justify-between  text-white ">
              <h2 className="text-2xl">Documentos</h2>
            </header>
            {letters.length ? (
              <ScrollArea className="px-5 space-y-6 mt-6 text-white h-[75vh]">
                <NavContent profiles={profiles} letters={letters} />
              </ScrollArea>
            ) : (
              <div className="flex h-full items-center justify-center px-5">
                <h2 className="text-white text-center text-2xl leading-relaxed ">
                  No tienes documentos todavía
                </h2>
              </div>
            )}
          </article>
          {/* <GetLetters /> */}
        </aside>
        {show === 'letter' ? (
          <LetterDB letter={letters.find((letr) => letr.id === id)!} />
        ) : (
          <ProfileDB
            profile={profiles.find((prof) => prof.id === id)!}
            edit={edit}
          />
        )}
      </div>
    </>
  )
}

export default Dashboard
