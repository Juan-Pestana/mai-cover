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
import { IFeedbacks } from '@/schema/feeback.schema'
import FeedbackDB from '@/components/dashboardMain/FeedbackDB'
import { IRecomendations } from '@/schema/recomendation.schema'
import RecomendationDB from '@/components/dashboardMain/RecomendationDB'
import CvAdaptDB from '@/components/dashboardMain/CvAdaptDB'
import PositionDB from '@/components/dashboardMain/PositionDB'
import { IPositions } from '@/schema/position.schema'

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
  feedbacks: IFeedbacks[]
  recomendations: IRecomendations[]
  cvAdapts: ILettersList[]
  positions: IPositions[]
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
          createdAt: true,
        },
      },
      profiles: {
        select: {
          id: true,
          profile_name: true,
          abstract: true,
          experience: true,
          training: true,
          createdAt: true,
        },
      },
      feedbacks: {
        select: {
          id: true,
          content: true,
          area: true,
          competences: true,
          position: true,
          proyects: true,
          develop: true,
          createdAt: true,
          rating: true,
        },
      },
      recomendations: {
        select: {
          id: true,
          content: true,
          area: true,
          competences: true,
          position: true,
          proyects: true,
          createdAt: true,
          rating: true,
        },
      },
      cvAdapts: {
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
          createdAt: true,
        },
      },
      positions: {
        select: {
          id: true,
          content: true,
          industry: true,
          position: true,
          proyects: true,
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

  //console.log(docs)

  const { profiles, letters, feedbacks, recomendations, cvAdapts, positions } =
    docs
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
    id = letters ? letters[0]?.id : id
    edit = ''
  }

  return (
    <>
      <div className="relative flex-1 h-full flex bg-black">
        <DrawerClientWrap
          letters={letters}
          profiles={profiles}
          feedbacks={feedbacks}
          recomendations={recomendations}
          cvAdapts={cvAdapts}
          positions={positions}
        />
        <aside className="hidden w-96 lg:block">
          <article className="relative w-full pb-10 flex flex-col h-full border-r-2 border-black bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <header className="p-4 font-bold text-lg flex justify-between  text-white ">
              <h2 className="text-2xl">Documentos</h2>
            </header>

            <ScrollArea className="px-5 space-y-6 mt-6 text-white h-[75vh]">
              <NavContent
                profiles={profiles}
                letters={letters}
                feedbacks={feedbacks}
                recomendations={recomendations}
                cvAdapts={cvAdapts}
                positions={positions}
              />
            </ScrollArea>
          </article>
          {/* <GetLetters /> */}
        </aside>
        {show === 'letter' && (
          <LetterDB letter={letters.find((letr) => letr.id === id)} />
        )}
        {show === 'profile' && (
          <ProfileDB
            profile={profiles.find((prof) => prof.id === id)}
            edit={edit}
          />
        )}
        {show === 'feedback' && (
          <FeedbackDB feedback={feedbacks.find((prof) => prof.id === id)} />
        )}
        {show === 'recomendation' && (
          <RecomendationDB
            recomendation={recomendations.find((prof) => prof.id === id)}
          />
        )}
        {show === 'cvAdapt' && (
          <CvAdaptDB cvAdapt={cvAdapts.find((prof) => prof.id === id)} />
        )}
        {show === 'position' && (
          <PositionDB position={positions.find((prof) => prof.id === id)} />
        )}
      </div>
    </>
  )
}

export default Dashboard
