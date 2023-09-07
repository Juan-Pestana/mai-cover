'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { toast } from '../ui/use-toast'

type Inputs = {
  name: string
  lastName: string
  email: string
  message: string
}

function ContactForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //console.log(data)
    // updateCompanyName(data.company_name)
    // updateOfferName(data.offer_name)
    // updateOffer(data.offer)

    const res = await fetch('/api/send/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      reset({ name: '', lastName: '', message: '', email: '' })
      toast({ title: 'Tu mensaje se ha enviado' })
    }
  }

  return (
    <div className="w-full max-w-2xl my-3 py-5 px-2 bg-slate-100 rounded-lg shadow-lg md:px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 flex gap-4">
          <div>
            <label className="text-sm ml-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full rounded-md p-2"
              placeholder="Johny"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">
                Nos encantaría conocer tu nombre
              </span>
            )}
          </div>
          <div>
            <label className="text-sm ml-2" htmlFor="lastName">
              Apellidos
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-2 w-full rounded-md p-2"
              placeholder="Doe"
              {...register('lastName')}
            />
          </div>
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="mt-2 w-full rounded-md p-2"
            placeholder="john@doe.com"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">
              Indícanos tu dirección de correo
            </span>
          )}
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            className=" mt-2 w-full rounded-md p-2 h-30 lg:h-40"
            placeholder="Mensaje"
            {...register('message', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          <div>
            {errors.message && (
              <span className="text-red-500">Qué te gustaría contarnos?</span>
            )}
          </div>
        </div>

        <button
          className="w-full mt-2 bg-black py-3 text-slate-50 rounded-lg text-lg hover:bg-[#24292F]/80 md:text-xl md:mt-4"
          type="submit"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  )
}

export default ContactForm
