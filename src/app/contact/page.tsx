import ContactForm from '@/components/forms/ContactForm'
import Profile from '@/components/forms/Profile'
import Image from 'next/image'
import { garamont } from '../fonts/fonts'
import Footer from '@/components/landing/Footer'

export default async function Profile_formPage({
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  return (
    <>
      <main className="flex-1 flex items-center justify-center ">
        <div className="flex flex-col justify-center items-center py-7 md:flex-row md:py-28 lg:w-5/6">
          <div className="pt-3 mx-auto flex-1 flex flex-col h-full lg:pr-5">
            <div className="p-3 mb-5 lg:mb-10">
              <h1
                className={`font-semibold text-4xl ${garamont.className} md:text-5xl`}
              >
                Contáctanos...
                <br /> Nos encantará saber de ti.
              </h1>
            </div>

            <Image
              className="hidden md:block lg:h-full"
              src="/contact_robot.png"
              alt="copy writing bot"
              width={550}
              height={550}
              priority
            />
          </div>
          <div className="flex-1 flex items-center justify-center p-3">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
