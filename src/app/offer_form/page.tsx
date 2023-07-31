import Offer from '@/components/Offer'
import { montserrat } from '../fonts/fonts'
import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  }
  return (
    <main className="flex-1 flex items-center justify-center p-3  ">
      <div className="flex flex-col w-full justify-center items-center ">
        <h2 className={`py-6 text-center text-4xl ${montserrat.className}`}>
          Cuéntanos sobre la oferta
        </h2>
        <Offer />
      </div>
    </main>
  )
}
