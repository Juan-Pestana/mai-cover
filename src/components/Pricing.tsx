import { RiCheckFill } from 'react-icons/ri'
import BuyButton from './pricing/BuyButton'
import { garamont } from '@/app/fonts/fonts'

function Pricing() {
  const includedFeatures = [
    'Cartas de presentación personalizada y adaptada a cada oferta',
    'Describe tu posición para incorporarla los aspectos clave en tu CV',
    'Recomendaciónes para adaptar tu CV a la posición a la que vas a aplicar',
    'Cartas de recomendación para tus colaboradores',
    'Propuesta de Feedback para tu equipo o colaboradores',
  ]

  return (
    <div id="getDocs" className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        {/* <div className="mx-auto max-w-2xl ">
          <h2
            className={`text-4xl text-center ${garamont.className} font-bold tracking-tight text-gray-900 sm:text-4xl `}
          >
            No te limites a un solo tipo de documento
          </h2>
          <p className="mt-6 text-lg text-center leading-8 text-gray-600 ">
            Continuamos desarrollando nuevos recursos y servicios Premium que te
            ayudarán a poner en palabras, las consideraciones más complejas
            sobre ti mismo o tus colaboradores
          </p>
        </div> */}
        <div className="mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-black">
              Cartas de presentación y mucho más
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sácale el máximo partido a nuestra IA generando hasta 15
              documentos desarrollados a partir de los prompts cuidadosamente
              diseñados por nuestros expertos, profesionales de RRHH.
            </p>
            <div className="mt-6 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 ">
                Qué incluye?
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-6 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <RiCheckFill
                    className="h-6 w-5 flex-none text-indigo-600 "
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className=" bg-gray-50 h-full py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  15 documentos, por tan solo
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    12€
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    EUR
                  </span>
                </p>
                <BuyButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
