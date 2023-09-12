import Footer from '@/components/landing/Footer'
import React from 'react'

function CookiesPage() {
  return (
    <>
      <main className=" w-full max-w-screen-lg p-5 m-5 mx-auto text-balance">
        <div className="text-xl font-semibold text-center">
          <h1>Política de Cookies</h1>
        </div>
        <ul className="mt-16">
          <li className="my-5">
            <p className="font-semibold my-3">Introducción</p>
            <p>
              Esta política de cookies se aplica a la aplicación web mAI-Cover.
              Nos tomamos muy en serio su privacidad y estamos comprometidos a
              protegerla. Esta política explica qué son las cookies, cómo las
              utilizamos, las cookies estrictamente necesarias para el
              funcionamiento de la aplicación y cómo puede administrarlas.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">¿Qué son las cookies?</p>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su
              dispositivo (ordenador, tableta o móvil) cuando visita nuestra
              aplicación web. Estos archivos de texto pueden ser leídos por la
              aplicación web en visitas futuras para mejorar su experiencia de
              usuario y recordar sus preferencias.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">¿Cómo utilizamos las cookies?</p>
            <p>
              Utilizamos cookies estrictamente necesarias para el funcionamiento
              de nuestra aplicación web. Estas cookies son esenciales para que
              usted pueda navegar por la aplicación y utilizar sus funciones,
              como acceder a áreas seguras y recordar sus preferencias, como el
              idioma o la configuración regional. Sin estas cookies, no
              podríamos proporcionar servicios esenciales que usted ha
              solicitado. <br /> No utilizamos cookies de terceros ni cookies
              para fines publicitarios o de seguimiento.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">¿Cómo administrar las cookies?</p>
            <p>
              La mayoría de los navegadores le permiten controlar las cookies a
              través de sus configuraciones. Sin embargo, tenga en cuenta que si
              decide desactivar las cookies, es posible que algunas partes de
              nuestra aplicación web no funcionen correctamente o no estén
              disponibles.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">
              Cambios en la Política de Cookies
            </p>
            <p>
              Podemos actualizar nuestra política de cookies ocasionalmente para
              reflejar cambios en nuestras prácticas de cookies. Le recomendamos
              que revise esta política periódicamente para estar informado sobre
              cómo utilizamos las cookies.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Contacto</p>
            <p>
              Si tiene alguna pregunta sobre nuestra política de cookies, no
              dude en contactarnos a hola@mai-solutions.com.
            </p>
          </li>
        </ul>
        <br />
        <div>
          <p className="font-semibold text-center">
            Al utilizar nuestra aplicación web, usted acepta el uso de cookies
            de acuerdo con esta política.
          </p>
        </div>
        <div className="mt-9 text-right">
          <p>Fecha de la última actualización:</p>
          <p>12 de septiembre, 2023</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CookiesPage
