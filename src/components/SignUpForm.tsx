'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useStore } from './Store'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Inputs = {
  userName: string
  email: string
  password: string
}

function SignUpForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //console.log(data)

    try {
      const user = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (user) {
        //TO DO
        //meter algo en local storage
        router.push('/api/auth/signin')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full max-w-xl my-10 py-10 px-5 bg-slate-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="company_name">
            Nombre de usuario
          </label>
          <input
            type="text"
            id="userName"
            className="mt-2 w-full rounded-md p-2"
            placeholder="Susana"
            {...register('userName', { required: true })}
          />
          {errors.userName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="offer_title">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-2 w-full rounded-md p-2"
            placeholder="susana@acme.com"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className=" mt-2 w-full rounded-md p-2"
            {...register('password', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          <div>
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <input
          className="w-full mt-4 bg-blue-950 py-3 text-slate-50 rounded-lg text-xl"
          type="submit"
          value="Registrarse"
        />
      </form>
      <p className="mt-4">
        ya tienes cuenta?{' '}
        <Link className="text-blue-800" href="/api/auth/signin">
          Inicia sesión
        </Link>
      </p>
    </div>
  )
}

export default SignUpForm
