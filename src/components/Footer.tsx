import { montserrat } from '@/app/fonts/fonts'

export default function Footer() {
  return (
    <footer className="p-4 bg-black md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl text-white"
        >
          <svg
            className="h-10 w-10 mx-4 lg:h-12 lg:w-12"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M464 205.5V134.875C464 113.405 446.134 96 424.096 96H88.9038C66.8656 96 49 113.405 49 134.875V368.125C49 389.595 66.8656 407 88.9038 407H247.5M464 316.5V407M304 407L355.5 275L405 407M464 258V268.5"
              stroke="white"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M464 316.5V407"
              stroke="white"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M75 122L255.5 279L436 122"
              stroke="#FFFEFE"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className={`hidden text-2xl md:block ${montserrat.className}`}>
            mAI-Cover
          </h3>
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Si Recursos Humanos va a utilizar la IA para hacer la selección,{' '}
          <br /> ¿Por qué no van a hacer lo mismo los candidatos?.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <a href="#" className="mr-4 hover:text-indigo-600 md:mr-6 ">
              Aviso Legal
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:text-indigo-600 md:mr-6">
              Política de privacidad
            </a>
          </li>

          <li>
            <a href="#" className="mr-4 hover:text-indigo-600 md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4  hover:text-indigo-600 md:mr-6">
              Contacto
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <a href="#" className="hover:underline">
            mAI-Cover.
          </a>
          Todos los derechos reservados.
        </span>
      </div>
    </footer>
  )
}
