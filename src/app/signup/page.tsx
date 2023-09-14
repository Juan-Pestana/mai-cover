import SignUpForm from '@/components/forms/SignUpForm'
import Image from 'next/image'
import { montserrat } from '../fonts/fonts'

export default function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="flex flex-col w-full items-center ">
        <h2 className={` text-center text-3xl ${montserrat.className}`}>
          Regístrate
        </h2>
        <SignUpForm />
      </div>
    </main>
  )
}
