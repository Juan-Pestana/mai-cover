import Image from 'next/image'
import { garamont } from './fonts/fonts'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import Pricing from '@/components/landing/Pricing'
import Features from '@/components/landing/Features'
import Footer from '@/components/landing/Footer'

export default async function asyncHome() {
  const session = await getServerSession(options)

  return (
    <>
      <main className="flex flex-col items-center px-3 sm:px-5  ">
        <div className="flex mt-14 flex-col max-w-screen-2xl lg:flex-row lg:mt-8 xl:mt-0 md:px-0">
          <div className="flex-1 flex items-center xl:pr-14 ">
            <div className="py-0 md:pr-11">
              <h1
                className={`text-3xl text-center leading-normal font-semibold ${garamont.className} md:text-left xl:text-4xl`}
              >
                Ayúdate de la Inteligencia Artificial para generar tu carta de
                presentación.
              </h1>
              <div className="mt-6 text-lg leading-8 text-gray-600">
                <p>
                  Si vas en serio en tu búsqueda de empleo, no descuides ni el
                  más mínimo detalle. Una buena carta, adaptada a cada oferta,
                  puede marcar la diferencia.{' '}
                </p>
                <p className="block font-bold mt-3 text-xl">
                  Deja que nuestra IA te inspire.
                </p>
              </div>

              <div className="flex mt-8 w-full md:w-5/6 md:text-left">
                {session ? (
                  <>
                    <Link
                      className="bg-black text-white px-4 py-2 border-2 border-black hover:shadow-xl hover:bg-indigo-600 hover:border-indigo-600 transition-all lg:text-xl lg:px-5 lg:py-2"
                      href="/profile_form"
                    >
                      Crea tu carta
                    </Link>
                    <Link
                      className="px-4 py-2 border-2 border-black hover:shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all ml-5 lg:text-xl lg:px-5 lg:py-2"
                      href="/dashboard"
                    >
                      Tus documentos
                    </Link>
                  </>
                ) : (
                  <Link
                    className="px-4 py-2 border-2 border-black text-xl hover:bg-[#24292F]/90 hover:text-white transition-all lg:text-xl lg:px-5 lg:py-2"
                    href="/signup"
                  >
                    Regístrate
                  </Link>
                )}
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
              priority
            />
          </div>
        </div>

        <div className="mb-20 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="group border border-transparent px-5 py-4 transition-colors hover:border-gray-300 ">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Regístrate{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-indigo-600">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm text-black opacity-50`}>
              Obtén{' '}
              <span className="font-semibold">
                2 cartas de presentación gratis
              </span>{' '}
              solo por registrarte.
            </p>
          </div>

          <div className="group border border-transparent px-5 py-4 transition-colors hover:border-gray-300">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Tu perfil{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-indigo-600">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Pega tu experiencia y formación desde tu CV. Genera tantos
              perfiles como quieras o edítalos y haz ajustes según la oferta.
            </p>
          </div>

          <div className="group border border-transparent px-5 py-4 transition-colors hover:border-gray-300 ">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              La Oferta{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-indigo-600">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Pega el texto de la oferta y nuestra IA sacará lo mejor de tu
              perfil para adaptarse a ella.
            </p>
          </div>

          <div className="group border border-transparent px-5 py-4 transition-colors hover:border-gray-300 ">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Genera tu Carta{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-indigo-600">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Genera tu carta de presentación y guárdala en tus documentos.
            </p>
          </div>
        </div>
        <section className="bg-black text-white">
          <Features />
        </section>
        <section>
          <Pricing />
        </section>
      </main>
      <Footer />
    </>
  )
}
