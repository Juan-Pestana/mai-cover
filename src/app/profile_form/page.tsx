import Profile from '@/components/forms/Profile'
import { Suspense } from 'react'
import ListProfiles from '@/components/ListProfiles'
import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function Profile_formPage({
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  const session = await getServerSession(options)
  let cvAdvisor = false

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/profile_form')
  }

  if (searchParams?.cvAdvisor) {
    cvAdvisor = true
  }
  return (
    <main className="flex-1 flex items-center justify-center ">
      <div className="flex flex-col  justify-center lg:flex-row lg:w-5/6">
        <div className="py-5 mx-auto flex-1 lg:pt-28 lg:pr-5">
          <Suspense
            fallback={
              <div className="w-full px-3">
                <h2 className="text-transparent text-center text-4xl leading-relaxed lg:text-left">
                  {' '}
                  alksjfjlsdjkjsdf sfkj sjkj sldkjj sjs weijdsm nvue
                </h2>
              </div>
            }
          >
            <ListProfiles />
          </Suspense>
        </div>
        <div className="flex-1 px-3">
          <Profile pageType="form" cvAdvisor={cvAdvisor} />
        </div>
      </div>
    </main>
  )
}
