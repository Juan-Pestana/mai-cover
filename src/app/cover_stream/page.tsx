import CoverStreamVer from '@/components/CoverStreamVer'
import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/&error=auth')
  }
  return (
    <main className="flex items-center justify-center p-3  ">
      <div className="flex flex-col w-full justify-center items-center lg:mt-6">
        <CoverStreamVer />
      </div>
    </main>
  )
}
