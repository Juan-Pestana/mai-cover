import Image from 'next/image'
import Offer from '@/components/Offer'
import { montserrat } from '../fonts/fonts'

export default function Home() {
  return (
    <main className="flex items-center justify-center p-3  ">
      <div className="flex flex-col w-full justify-center items-center lg:mt-6">
        <h2 className={`py-6 text-center text-4xl ${montserrat.className}`}>
          Cuéntanos sobre la oferta
        </h2>
        <Offer />
      </div>
    </main>
  )
}
