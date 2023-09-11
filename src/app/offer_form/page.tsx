import Offer from '@/components/forms/Offer'
import { montserrat } from '../fonts/fonts'
import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function Offer_formPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined }
}) {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  }

  let cvAdvisor = false

  if (searchParams?.cvAdvisor) {
    cvAdvisor = true
  }

  return (
    <main className="flex-1 flex items-center justify-center p-3  ">
      <div className="flex flex-col w-full justify-center items-center ">
        <h2 className={`py-6 text-center text-4xl ${montserrat.className}`}>
          Háblanos de la oferta
        </h2>
        <Offer cvAdvisor={cvAdvisor} />
      </div>
    </main>
  )
}
