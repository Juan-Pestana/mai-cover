'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter, useSearchParams, redirect } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useToast } from '../ui/use-toast'
import { useEffect, useState } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

type Inputs = {
  email: string
  password: string
  notRegisteredInput: string
}

function SignInForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>()

  const searchParams = useSearchParams()

  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //console.log(data)

    try {
      await signIn('credentials', { ...data, redirect: false }).then((res) => {
        if (res?.error) {
          setError('notRegisteredInput', {
            type: 'custom',
            message: `Error en el inicio de sesión`,
          })
        } else {
          console.log('sesion iniciada')
          if (res?.url) {
            router.refresh()
            if (searchParams && searchParams.get('callbackUrl')) {
              router.push(searchParams.get('callbackUrl')!)
            } else {
              router.push('/')
            }
          }
        }
      })
    } catch (error) {
      console.log(error)
      setError('notRegisteredInput', {
        type: 'custom',
        message: 'Error en el servidor',
      })
    }
  }

  const githubSignIn = async () => {
    setLoading(true)

    try {
      await signIn('github', { callbackUrl: '/' }).then((callback) => {
        if (callback?.error) {
          setError('notRegisteredInput', {
            type: 'custom',
            message: `Error en el inicio de sesión,  ${callback.error}`,
          })
          console.log('hubo un error')
        }

        if (callback?.ok && !callback?.error) {
          //   toast.success('Logged in successfully!')
          console.log('sesion iniciada')
        }
      })
    } catch (error) {
      console.log(error)
      setError('notRegisteredInput', {
        type: 'custom',
        message: 'Error en el inicio de sesión',
      })
    }
    setLoading(false)
  }

  const linkedInSignIn = async () => {
    setLoading(true)
    try {
      await signIn('linkedin', { callbackUrl: '/' }).then((callback) => {
        if (callback?.error) {
          setError('notRegisteredInput', {
            type: 'custom',
            message: `Error en el inicio de sesión,  ${callback.error}`,
          })
          console.log('hubo un error')
        }

        if (callback?.ok && !callback?.error) {
          //   toast.success('Logged in successfully!')
          console.log('sesion iniciada')
        }
      })
    } catch (error) {
      console.log(error)
      setError('notRegisteredInput', {
        type: 'custom',
        message: 'Error en el inicio de sesión',
      })
    }
    setLoading(false)
  }

  return (
    <div className="w-full max-w-xl my-10 py-3 px-5 bg-slate-100 rounded-lg shadow-lg">
      <button
        type="button"
        className="block w-full content-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-lg  py-3 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 my-3"
        onClick={githubSignIn}
        disabled={loading}
      >
        <div className="items-center content-center">
          <svg
            className="w-5 h-5 mr-2 inline-block"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with Github
        </div>
      </button>
      {/* OJOOOO.... pendiente de debugear este tema */}
      <button
        type="button"
        className="flex justify-center w-full content-center text-white bg-[#0a66c2] hover:bg-[#0a66c2]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-lg  py-3 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 my-3"
        onClick={linkedInSignIn}
        disabled={loading}
      >
        <FaLinkedinIn className="w-5 h-5 mr-2 inline-block text-white" />
        <div className="items-center content-center">Sign in with LinkedIn</div>
      </button>
      <div>
        <span className=" w-full flex items-center">
          <hr className="flex-1" />{' '}
          <div className="px-3">
            <span> Or </span>
          </div>{' '}
          <hr className="flex-1" />
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button
          className="w-full mt-4 bg-black py-3 text-slate-50 rounded-lg text-lg"
          type="submit"
          value="Inicia Sesión"
        >
          Inicia Sesión
        </button>
        {errors.notRegisteredInput && (
          <span className="text-red-500">
            {errors.notRegisteredInput.message}
          </span>
        )}
      </form>
      <p className="mt-4">
        Aun no tienes cuenta?{' '}
        <Link className="text-blue-800" href="/signup">
          Regístrate
        </Link>
      </p>
    </div>
  )
}

export default SignInForm
