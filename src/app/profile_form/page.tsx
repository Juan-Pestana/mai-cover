import Profile from '@/components/Profile'
import { Suspense } from 'react'
import ListProfiles from '@/components/ListProfiles'

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center ">
      <div className="flex flex-col  justify-center lg:flex-row lg:w-5/6">
        <div className="py-5 mx-auto lg:w-3xl lg:pt-28 lg:pr-5">
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

        <Profile />
      </div>
    </main>
  )
}
