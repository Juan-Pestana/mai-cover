import SignInForm from '@/components/forms/SignInForm'
import { montserrat } from '../fonts/fonts'

export default function signIn() {
  return (
    <main className=" flex-1 flex items-center justify-center ">
      <div className="flex flex-col w-full items-center ">
        <h2 className={` text-center text-3xl ${montserrat.className}`}>
          Inicia Sesión
        </h2>
        <SignInForm />
      </div>
    </main>
  )
}
