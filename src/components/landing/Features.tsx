import { garamont } from '@/app/fonts/fonts'
import { RiFileAddLine } from 'react-icons/ri'

const features = [
  {
    name: 'Cartas de Presentación',
    description:
      'Una buena carta de presentación, adaptada a las características y requerimientos de cada oferta, marcará la diferencia.',
    icon: RiFileAddLine,
    href: '/profile_form',
  },
  {
    name: 'Sugerencias CV',
    description:
      'Adaptar tu perfil a cada oferta es una recomendación clásica, pero sin un poco de ayuda de nuestra IA, puede resultar tedioso.',
    icon: RiFileAddLine,
    href: '/profile_form?cvAdvisor=true',
  },
  {
    name: 'Describe tu Posición',
    description:
      'Dominas tu posición pero... ¿Sabrías extraer y expresar los aspectos clave para que un Hiring Manager entienda su valor?',
    icon: RiFileAddLine,
    href: '/position_form',
  },
  {
    name: 'Feedback a tu equipo',
    description:
      'Un par de detalles sobre tu colaborador y generaremos un feedback personalizado para que puedas adaptarlo y hacerlo tuyo.',
    icon: RiFileAddLine,
    href: '/feedback_form',
  },
  {
    name: 'Cartas de recomendación',
    description:
      'No es fácil redactar una buena carta de recomendación, y menos aun hacerlo en el formato adecuado, te ayudamos a arrancar.',
    icon: RiFileAddLine,
    href: '/recomendation_form',
  },
]

export default function Features() {
  const firstFeatures = features.slice(0, 3)
  const lastFeatures = features.slice(3)

  return (
    <div className="bg-white pt-15 pb-20">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            y mucho más
          </h2>
          <h3
            className={`mt-2 text-3xl ${garamont.className} font-bold tracking-tight text-gray-900 sm:text-4xl`}
          >
            Accede a la generación de nuestros documentos y servicios.
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Continuamos desarrollando nuevos recursos y servicios que te
            ayudarán a poner en palabras las consideraciones más complejas sobre
            ti mismo o tus colaboradores.
          </p>
        </div>
        <div className="mx-auto mt-16 w-full mb-7 sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-6 ">
              {firstFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="group border-2 border-slate-200 lg:col-span-2 hover:border-slate-300  transition-all"
                >
                  <div className="p-3">
                    <div className="relative pl-16  ">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                      <div className="flex justify-end py-1 pr-3">
                        <a
                          className="px-3 py-1 text-black border-2 border-black border-opacity-50 hover:bg-indigo-600 hover hover:text-white group-hover:shadow-md hover:border-indigo-600 transition-all"
                          href={feature.href}
                        >
                          Pruébalo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className=" mx-auto grid mt-8 grid-cols-1  gap-x-8 gap-y-8 lg:max-w-[850px] lg:grid-cols-2 "> */}
              {lastFeatures.map((feature, i) => (
                <div
                  key={feature.name + i}
                  className={`  group border-2 border-slate-200 lg:col-span-2 hover:border-slate-300  transition-all ${
                    i === 0 ? 'lg:col-start-2' : 'lg:col-start-4'
                  }`}
                >
                  <div className="p-3">
                    <div className="relative pl-16  ">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                      <div className="flex justify-end py-1 pr-3">
                        <a
                          className="px-3 py-1 text-black border-2 border-black border-opacity-50 hover:bg-indigo-600 hover hover:text-white hover:shadow-md hover:border-indigo-600 transition-all"
                          href={feature.href}
                        >
                          Pruébalo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* </div> */}
          </dl>
        </div>
      </div>
    </div>
  )
}
