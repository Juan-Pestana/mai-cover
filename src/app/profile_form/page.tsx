import Image from 'next/image'
import Profile from '@/components/Profile'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="flex flex-col w-full items-center ">
        <h2 className="text-center text-xl">Un par de datos sobre tu CV</h2>
        <Profile />
      </div>
    </main>
  )
}
