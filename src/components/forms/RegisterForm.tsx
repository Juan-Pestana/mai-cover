'use client'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { signUpSchema, ISignUp } from '@/schema/user.schema'
import { FaLinkedinIn } from 'react-icons/fa'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

function SignUpForm() {
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    //validación bien hecha
  } = useForm<ISignUp>()

  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    try {
      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
      } else {
        const error = await res.json()
        console.log(error)
        setError('notRegisteredInput', {
          type: 'custom',
          message: `Error en el registro de usuario, ${error.message}`,
        })
      }
    } catch (error) {
      //hay que pulir esto

      console.log(error)
    }
  }

  return (
    <div className="w-full max-w-xl my-10 py-3 px-5 bg-slate-100 rounded-lg shadow-lg h">
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
            <span className="text-red-500">{errors.userName.message}</span>
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
            <span className="text-red-500">{errors.email.message}</span>
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
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
        </div>

        <button
          className="w-full mt-4 bg-black hover:bg-[#24292F]/90 py-3 text-slate-50  text-xl"
          type="submit"
        >
          Regístrate
        </button>
        {errors.notRegisteredInput && (
          <span className="text-red-500">
            {errors.notRegisteredInput.message}
          </span>
        )}
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
