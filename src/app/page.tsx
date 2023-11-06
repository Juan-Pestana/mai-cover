import Image from 'next/image'
import { garamont } from './fonts/fonts'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import Pricing from '@/components/landing/Pricing'
import LandingButton from '@/components/landing/LandingButton'
import Features from '@/components/landing/Features'
import Faqs from '@/components/landing/Faqs'
import Footer from '@/components/landing/Footer'
import { Suspense } from 'react'

export default async function asyncHome() {
  return (
    <>
      <main className="flex flex-col items-center   ">
        <div className="flex mt-14 flex-col max-w-screen-2xl px-3 md:px-5 lg:flex-row lg:mt-8 xl:mt-0 ">
          <div className="flex-1 flex items-center xl:pr-14 ">
            <div className="py-0 md:pr-11">
              <h1
                className={`${garamont.className} text-3xl text-center leading-normal font-semibold md:text-left xl:text-4xl`}
              >
                Ayúdate de la Inteligencia Artificial para crear los documentos
                para tu búsqueda de empleo o el feedback de tu equipo.
              </h1>
              <div className="mt-6  text-lg leading-8 text-gray-600">
                <p>
                  Si vas en serio en tu búsqueda de empleo, o necesitas ayuda
                  con los documentos de feedback a tus colaboradores. Apoyate en
                  nuestra IA experta en Recursos Humanos para ayudarte a
                  arrancar.{' '}
                </p>
                <p className="block font-bold mt-3 text-xl">
                  Deja que nuestra IA te inspire.
                </p>
              </div>

              <div className="flex mt-8 md:w-5/6 md:text-left">
                <Suspense
                  fallback={
                    <Link
                      className="px-4 py-2 border-2 border-black hover:shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all lg:text-lg lg:px-5 lg:py-2"
                      href="#features"
                    >
                      Empieza ya
                    </Link>
                  }
                >
                  <LandingButton />
                </Suspense>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              className="w-full"
              src="/headImageTransp.png"
              alt="copy writing bot"
              width={550}
              height={550}
              sizes="(min-width: 1680px) 740px, (min-width: 1040px) calc(38.71vw + 97px), calc(97.78vw - 17px)"
              priority
            />
          </div>
        </div>

        <section id="features">
          <Features />
        </section>
        {/* <section>
          <Pricing />
        </section> */}
        <section className="w-full bg-gradient-to-r from-gray-100 to-gray-50">
          <Faqs />
        </section>
      </main>
      <Footer />
    </>
  )
}
