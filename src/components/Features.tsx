import { garamont } from '@/app/fonts/fonts'

const features = [
  {
    name: 'Describe tu puesto',
    description:
      'Dominas tu puesto pero... ¿Sabrías ponerlo en palabras, para que un Hiring Manager entienda su valor?',
    //icon: CloudArrowUpIcon,
  },
  {
    name: 'Sugerencias CV',
    description:
      'Adaptar tu perfil a cada oferta es una recomendación clásica, pero sin un poco de ayuda puede resultar tedioso.',
    //icon: LockClosedIcon,
  },
  {
    name: 'Feedback a tu equipo',
    description:
      'Un par de detalles sobre tu colaborador y generaremos un feedback personalizado para que puedas adaptarlo y hacerlo tuyo.',
    //icon: ArrowPathIcon,
  },
  {
    name: 'Cartas de recomendación',
    description:
      'No es fácil redactar una buena carta de presentación, y menos aun hacerlo en el formato adecuado, te ayudamos a arrancar.',
    //icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-18 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            y mucho más
          </h2>
          <h3
            className={`mt-2 text-3xl ${garamont.className} font-bold tracking-tight text-gray-900 sm:text-4xl`}
          >
            Accede a la generación de nuestros nuevos documentos y servicios.
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Continuamos desarrollando nuevos recursos y servicios Premium que te
            ayudarán a poner en palabras, las consideraciones más complejas
            sobre ti mismo o tus colaboradores
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                    +
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
