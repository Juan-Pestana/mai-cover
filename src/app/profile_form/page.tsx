import Image from 'next/image'
import Profile from '@/components/Profile'
import { Suspense } from 'react'
import ListProfiles from '@/components/ListProfiles'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="mt-5 flex flex-col w-full justify-center lg:flex-row">
        <div className="pt-16 pb-5 mx-auto max-w-3xl lg:py-28">
          <Suspense>
            <ListProfiles />
          </Suspense>
        </div>

        <Profile />
      </div>
    </main>
  )
}
