import Image from 'next/image'
import Profile from '@/components/Profile'
import { Suspense } from 'react'
import ListProfiles from '@/components/ListProfiles'
import { Divide } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="flex flex-col  justify-center lg:flex-row lg:w-5/6">
        <div className="py-5 mx-auto lg:w-3xl lg:py-28">
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
