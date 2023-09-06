import SignUpForm from '@/components/forms/SignUpForm'
import Image from 'next/image'

export default function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="flex flex-col w-full items-center ">
        <h2 className="text-center text-xl">
          Regístrate y obtén 3 generaciones gratis
        </h2>
        <SignUpForm />
      </div>
    </main>
  )
}
