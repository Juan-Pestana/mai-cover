import SignInForm from '@/components/forms/SignInForm'

export default function signIn() {
  return (
    <main className=" flex-1 flex items-center justify-center ">
      <div className="flex flex-col w-full items-center ">
        <h2 className="text-center text-xl">Inicia Sesión</h2>
        <SignInForm />
      </div>
    </main>
  )
}
