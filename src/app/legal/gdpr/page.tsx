import Footer from '@/components/landing/Footer'
import React from 'react'

function GdprPage() {
  return (
    <>
      <main className=" w-full max-w-screen-lg p-5 m-5 mx-auto text-balance">
        <div className="text-xl font-semibold text-center">
          <h1>Política de Privacidad</h1>
        </div>
        <div className="mt-16">
          <p>
            Esta Política de Privacidad describe cómo mAI-Cover recopila,
            utiliza y comparte información personal cuando usted utiliza nuestra
            aplicación (en adelante, &quot;la Aplicación&quot; ). Su privacidad
            es importante para nosotros y nos comprometemos a proteger sus datos
            personales de acuerdo con las regulaciones aplicables, incluido el
            Reglamento General de Protección de Datos (RGPD).
          </p>
        </div>
        <ul className="mt-16">
          <li className="my-5">
            <p className="font-semibold my-3">Información que Recopilamos</p>
            <p>
              Cuando utiliza nuestra Aplicación, recopilamos y almacenamos la
              siguiente información personal:
            </p>
            <p>
              Correo Electrónico: Recopilamos su dirección de correo electrónico
              para poder comunicarnos con usted y proporcionarle información
              sobre novedades del servicio, ofertas y descuentos. También
              utilizamos su dirección de correo electrónico para autenticar su
              cuenta.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Uso de la Información Personal</p>
            <p>
              Utilizamos la información personal que recopilamos con los
              siguientes propósitos legítimos:{' '}
            </p>
            <ul className="ml-3">
              <li>
                <span className="font-semibold">Comunicación:</span> Utilizamos
                su dirección de correo electrónico para comunicarnos con usted
                con respecto a las interacciones que realice en la Aplicación y
                para brindarle información importante sobre el servicio.
              </li>

              <li>
                <span className="font-semibold">Novedades del Servicio: </span>
                Podemos enviarle actualizaciones, noticias y novedades
                relacionadas con la Aplicación y sus funcionalidades.
              </li>
              <li>
                <span className="font-semibold">Ofertas y Descuentos:</span>{' '}
                Ocasionalmente, podemos enviarle información sobre ofertas
                promocionales y descuentos relacionados con nuestros servicios
                que puedan ser de su interés.
              </li>
            </ul>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Compartir Información Personal</p>
            <p>
              No compartimos su información personal con terceros, excepto en
              las siguientes circunstancias:
            </p>
            <ul className="ml-3">
              <li>
                <span className="font-semibold">Proveedores de servicios</span>{' '}
                Podemos compartir su información personal con proveedores de
                servicios que nos ayudan a operar y mantener la Aplicación.
                Estos proveedores de servicios tienen acceso a su información
                personal solo en la medida necesaria para realizar tareas en
                nuestro nombre y están obligados a mantener la confidencialidad
                y seguridad de su información.
              </li>

              <li>
                <span className="font-semibold">Cumplimiento legal </span>
                Podemos divulgar su información personal cuando sea necesario
                para cumplir con una obligación legal, una orden judicial o un
                proceso legal.
              </li>
            </ul>
          </li>

          <li className="my-5">
            <p className="font-semibold my-3">Sus Derechos</p>
            <p>
              Usted tiene ciertos derechos en relación con su información
              personal, de acuerdo con las leyes de protección de datos
              aplicables, incluido el RGPD. Estos derechos pueden incluir:
            </p>
            <ul className="ml-3">
              <li>
                <p>Acceder a sus datos personales.</p>
              </li>
              <li>
                <p>Rectificar datos inexactos o desactualizados.</p>
              </li>
              <li>
                <p>Limitar el procesamiento de sus datos personales.</p>
              </li>
              <li>
                <p>Borrar sus datos personales.</p>
              </li>
              <li>
                <p>Oponerse al procesamiento de sus datos personales.</p>
              </li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, póngase en contacto con
              nosotros a través de la información proporcionada en la sección
              &quot;Contacto&quot; a continuación.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Seguridad de los datos</p>
            <p>
              Tomamos medidas razonables para proteger la seguridad de su
              información personal y garantizar que se almacene de manera
              segura. Sin embargo, no podemos garantizar la seguridad absoluta
              de la información transmitida a través de Internet.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">
              Cambios en la Política de Privacidad
            </p>
            <p>
              Nos reservamos el derecho de modificar esta Política de Privacidad
              en cualquier momento. Cualquier cambio será efectivo cuando
              publiquemos la versión actualizada de la Política de Privacidad en
              la Aplicación. Le recomendamos que revise periódicamente esta
              política para estar informado sobre cómo protegemos su
              información.
            </p>
          </li>
          <li className="my-5">
            <p className=" my-3">
              Si tiene preguntas, comentarios o inquietudes sobre esta Política
              de Privacidad, o desea ejercer sus derechos de privacidad, no dude
              en ponerse en contacto con nosotros en:
            </p>
            <ul className="ml-3">
              <li>
                <p className="font-semibold">mAI-Solutions</p>
              </li>
              <li>
                <p>Dirección:</p>
                <p>C/ Alonso Cano 46, 28003, Madrid</p>
              </li>
              <li>
                <p>Teléfono:</p>
                <p>+34 678 603 364</p>
              </li>
              <li>
                <p>Correo Electrónico</p>
                <p>
                  <a
                    className="text-indigo-600 hover:underline"
                    href="hola@mai-cover.com"
                  >
                    hola@mai-cover.com
                  </a>
                </p>
              </li>
            </ul>
          </li>
        </ul>

        <br />
        <div>
          <p className="font-semibold text-center">
            En mAI-Cover Estamos comprometidos en proteger su privacidad y
            mantener una relación de confianza con usted.
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

export default GdprPage
