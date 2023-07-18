import SignInForm from '@/components/SignInForm'
import Image from 'next/image'

export default function SignIp() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="flex flex-col w-full items-center ">
        <h2 className="text-center text-xl">Inicia Sesión</h2>
        <SignInForm />
      </div>
    </main>
  )
}
