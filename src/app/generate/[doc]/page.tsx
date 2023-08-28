import CoverStreamVer from '@/components/streamers/CoverStreamVer'
import FeedbackStream from '@/components/streamers/FeedbackStream'
import RecomendationStream from '@/components/streamers/RecomendationStream'
import { getServerSession } from 'next-auth/next'
import { options } from '../../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function GereatePage({
  params,
  searchParams,
}: {
  params: { doc: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  }

  if (params.doc === 'cover_letter') {
    return (
      <main className="flex items-center justify-center p-3  ">
        <div className="flex flex-col w-full justify-center items-center lg:mt-6">
          <CoverStreamVer />
        </div>
      </main>
    )
  }
  if (params.doc === 'feedback') {
    return (
      <main className="flex items-center justify-center p-3  ">
        <div className="flex flex-col w-full justify-center items-center lg:mt-6">
          <FeedbackStream />
        </div>
      </main>
    )
  }
  if (params.doc === 'recomendation') {
    return (
      <main className="flex items-center justify-center p-3  ">
        <div className="flex flex-col w-full justify-center items-center lg:mt-6">
          <RecomendationStream />
        </div>
      </main>
    )
  }
}
