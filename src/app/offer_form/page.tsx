import Image from 'next/image'
import Offer from '@/components/Offer'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="flex flex-col w-full items-center ">
        {/* <h2 className="text-center text-xl">Cuéntanos sobre la oferta</h2> */}
        <Offer />
      </div>
    </main>
  )
}
