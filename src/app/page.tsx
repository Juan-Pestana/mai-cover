import Image from 'next/image'
import { montserrat, garamont } from './fonts/fonts'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'

export default async function asyncHome() {
  const session = await getServerSession(options)
  return (
    <main className="flex flex-col items-center ">
      <div className="flex mt-24 flex-col max-w-screen-2xl px-5 lg:flex-row lg:mt-8 xl:mt-0 md:px-0">
        <div className="flex-1 flex items-center xl:pr-14 ">
          <div className="py-0 md:pr-11">
            <h1
              className={`text-3xl leading-relaxed font-semibold ${garamont.className} lg:text-3xl xl:text-4xl`}
            >
              Ayúdate de la Inteligencia Artificial para generar tu carta de
              presentación.
            </h1>
            <div className="mt-3 leading-7 text-lg text-slate-700 md:text-xl">
              <p className="">
                Si vas en serio en tu búsqueda de empleo, no descuides ni el más
                mínimo detalle. Una buena carta, adaptada a cada oferta, puede
                marcar la diferencia.{' '}
                <span className="font-bold text-xl">
                  Deja que nuestra IA te inspire.
                </span>
              </p>
            </div>

            <div className="flex mt-8 w-5/6">
              {session ? (
                <Link
                  className="px-4 py-2 border-2 border-black text-xl hover:bg-black hover:text-white transition-all lg:text-2xl lg:px-6 lg:py-2"
                  href="/profile_form"
                >
                  Crea tu carta
                </Link>
              ) : (
                <Link
                  className="px-4 py-2 border-2 border-black text-xl hover:bg-black hover:text-white transition-all lg:text-2xl lg:px-6 lg:py-3"
                  href="/signup"
                >
                  Date de alta
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            className="w-full"
            src="/headImageTrans.png"
            alt="copy writing bot"
            width={550}
            height={550}
            priority
          />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Date de Alta{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Obtén <span className="font-semibold">2 cartas gratis</span> en
            cuanto te Registres.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tu perfil{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Simplemente pega desde tu CV el perfil que nuestra IA considerará
            para cada oferta.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 ">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            La Oferta{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Pega el texto de la oferta y nuestra y nuestra IA sacará lo mejor de
            tu perfil para adaptarse a ella.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 ">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Genera tu Carta{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Genera tu carta de presentación y guárdala en tu perfil.
          </p>
        </div>
      </div>
    </main>
  )
}
