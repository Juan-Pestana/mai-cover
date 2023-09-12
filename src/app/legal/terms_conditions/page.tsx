import Footer from '@/components/landing/Footer'
import Link from 'next/link'
import React from 'react'

function TermsConditionsPage() {
  return (
    <>
      <main className=" w-full max-w-screen-lg p-5 m-5 mx-auto text-balance">
        <div className="text-xl font-semibold text-center">
          <h1>Términos y condiciones</h1>
        </div>
        <ul className="mt-16">
          <li className="my-5">
            <p>
              En cumplimiento con el deber de información recogido en artículo
              10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
              de la Información y del comercio electrónico, se informa que la
              presente página web (mai-cover.com, en adelante LA APLICACIÓN)
              pertenece a:
            </p>
            <ul className="m-5 list-disc">
              <li>
                <p>Identidad del responsable: Juan Pablo Pestana da Silva</p>
              </li>
              <li>
                <p>Nombre comercial: mAI-Solutions </p>
              </li>
              <li>
                <p>NIF/CIF: 53175208-J</p>
              </li>
              <li>
                <p>Dirección: c/ Alonso Cano 46, 28003, Madrid</p>
              </li>
              <li>
                <p>Correo electrónico: juan@mai-solutions.net</p>
              </li>
            </ul>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Registro de Usuario</p>
            <p></p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">
              Para llevar a cabo la generación de documentos, el usuario deberá
              registrarse en la aplicación creándose una cuenta.{' '}
            </p>
            <p>
              El usuario será requerido para proporcionar la siguiente
              información:
            </p>
            <ul className="m-5 list-disc">
              <li>Nombre de usuario</li>
              <li>Dirección de correo</li>
              <li>Contraseña</li>
            </ul>
            <p>
              Es responsabilidad del usuario proporcionar información precisa,
              completa y actualizada durante el proceso de registro. Si en algún
              momento la información proporcionada cambia, es responsabilidad
              del usuario actualizarla en la configuración de su cuenta.
            </p>
            <br />
            <p>
              El usuario es responsable de mantener la confidencialidad de su
              contraseña y cualquier otra información de acceso a su cuenta. Se
              recomienda que el usuario no comparta esta información con nadie.
            </p>
            <br />
            <p>
              Si el usuario sospecha que su cuenta ha sido comprometida, debe
              cambiar su contraseña inmediatamente y notificar al servicio de
              atención al cliente de la aplicación.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Propiedad Intelectual</p>
            <p>
              Los derechos sobre los diseños, logos, imágenes, y textos
              contenidos en la web mAI-Cover.com son titularidad exclusiva de
              mAI-Solutions , quedando prohibida cualquier forma de uso o
              reproducción de los mismos a cualquier usuario o visitante de la
              web.
            </p>
            <br />
            <p>
              {' '}
              La propiedad intelectual de los textos generados por la
              Inteligencia Artificial objeto del servicio de mAI-Cover son
              cedidos al usuario, quien podrá disponer de ellos en el modo que
              mejor considere, dentro de las limitaciones legales que
              correspondan, de acuerdo con la jurisdicción aplicable en cada
              caso. mAI-Solutions se reserva el derecho a la utilización de los
              textos generados para llevar a cabo el entrenamientos del modelo
              de generación con el único objeto de mejorar el servicio.{' '}
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Privacidad de los datos</p>
            <p>
              En mAi-Cover nos tomamos muy en serio la privacidad de la
              información de nuestros usuarios, por lo que se establecen por
              diseño, las máximas limitaciones en la recopilación de información
              identificativa.
            </p>
            <br />
            <p>
              mAI-Cover almacenará la dirección de email del usuario como única
              información de contacto, este almacenamiento se lleva a cabo,
              sobre la base del interés legítimo que supone la necesidad de
              tener la posibilidad de contactar con el usuario ante las
              diferentes interacciones que realice con la Aplicación.
            </p>
            <br />
            <p>
              Esta información será almacenada en los Servicios Cloud del
              Proveedor de Bases de Datos PlanetScale, bajo los estándares
              empresariales de integridad, seguridad, cifrado y disponibilidad.
            </p>
            <br />
            <p>
              La gestión y tramitación de las transacciones y pagos que es
              posible realizar desde la web son desarrollados por el proveedor
              de pagos Stripe.com. mAI-Cover podrá almacenar información sobre
              la transacción (importe, estado, fecha), pero en ningún caso
              recogerá información relacionada con los medios de pago utilizados
              por el usuario.
            </p>
            <br />
            <p>
              En lo relativo al cumplimiento de la LOPD, sus requerimientos así
              como el ejercicio de derechos puede dirigirse a{' '}
              <Link
                className="text-indigo-600 hover:underline"
                href={'/legal/gdpr'}
              >
                nuestra política de privacidad.
              </Link>{' '}
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Uso Aceptable</p>
            <p>
              El usuario de mAI-Cover es libre de utilizar los documentos
              generados por la aplicación en el modo en que desee, siempre
              dentro de los límites legales establecidos dentro de la
              jurisdicción aplicable, no siendo en ningún caso mAI-Solutions ni
              sus administradores o propietarios, responsables de la utilidad
              que le puedan dar a estos.
            </p>
            <br />
            <p>
              En cualquier caso, desde mAI-Cover, insistimos en la conveniencia
              de realizar un proceso de adaptación de los documentos generados
              al caso de uso específico pretendido por el usuario.{' '}
            </p>
            <br />
            <p>
              La aplicación mAI-Cover busca ser una herramienta que sirva de
              inspiración y apoyo en la redacción y desarrollo de textos
              requeridos en el ámbito de Recursos Humanos, pero estos no deben
              ser tomados como un contenido preciso y suficiente. La adaptación
              y ajuste de los documentos y textos generados es una
              responsabilidad exclusiva del usuario.{' '}
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Generación de Documentos</p>
            <p>
              La generación de documentos se lleva a cabo mediante la
              utilización de ingeniería de prompts, desarrollados con el
              asesoramientos de profesionales de Recursos Humanos, así como la
              utilización de diversos modelos generativos LLM’s, con licencia
              comercial disponible, previamente entrenados para cada una de las
              tareas, documentos, o textos pretendidos.
            </p>
            <br />
            <p>
              mAI-Solutions podrán cambiar en cualquier momento el modelo
              generativo utilizado en cada caso o alterar su entrenamiento, lo
              que puede suponer una variación importante en los resultados
              obtenidos a partir del mismo input.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Pago y Facturación</p>
            <p>
              Los usuarios pueden comprar bonos a través de la Aplicación, que
              les permitirán generar un determinado número de documentos
              utilizando la inteligencia artificial proporcionada por la
              Aplicación. Por ejemplo, un bono de 10 euros dará acceso al
              usuario a la generación de 15 documentos.
            </p>
            <br />
            <p>
              El precio de los bonos estará claramente indicado en la
              Aplicación. Nos reservamos el derecho de modificar el precio de
              los bonos en cualquier momento, sin previo aviso. Cualquier cambio
              en el precio será efectivo inmediatamente después de su
              publicación en la Aplicación.
            </p>
            <br />
            <p>
              Los bonos adquiridos serán añadidos al saldo de bonos del usuario
              en la Aplicación, y podrán ser utilizados para generar documentos
              según la cantidad de documentos que cada bono permita.
            </p>
            <br />
            <p>
              Los bonos adquiridos no tendrán fecha de caducidad y podrán ser
              utilizados en cualquier momento mientras la cuenta del usuario
              permanezca activa y en buen estado.
            </p>
            <br />
            <p>
              Todos los pagos realizados son finales y no reembolsables, salvo
              en casos de compras duplicadas o errores técnicos atribuibles a la
              Aplicación.
            </p>
            <br />
            <p>
              No se realizarán reembolsos en el caso de que el usuario decida
              cerrar su cuenta, teniendo bonos activos sin consumir.
            </p>
            <br />
            <p>
              Si el usuario considera que se le ha facturado incorrectamente,
              debe contactar con nuestro servicio de atención al cliente ({' '}
              <a
                href="hola@mai-soutions.net"
                className="text-indigo-600 hover:underline"
              >
                hola@mai-soutions.net
              </a>
              ) en un plazo máximo de 14 días desde la fecha de la factura en
              cuestión.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Cancelación y Terminación</p>
            <p>
              El Usuario podrá cancelar su cuenta en cualquier momento que lo
              desee.
            </p>
            <br />
            <p>
              mAI-Solutions se reserva el derecho a eliminar o suspender la
              cuenta de un usuario en cualquier momento, en el caso de que se
              detecte la utilización inadecuada del servicio, se produzca la
              recepción de requerimientos legales, o se lleve a cabo por parte
              del usuario cualquier acción o comunicación pública que suponga un
              menoscabo a la integridad reputacional de la aplicación, el
              servicio, sus propietarios, administradores o empleados.
            </p>
            <br />
            <p>
              Una vez tenga lugar la cancelación o suspensión de la cuenta por
              cualquiera de los motivos anteriores, el Usuario debe tener en
              cuenta que es posible que aun pueda recibir alguna comunicación
              automatizada de mAI-Cover, durante los siguientes 15 días
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">Limitación de Responsabilidad</p>
            <p></p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3"></p>
            <p>
              Los administradores de mAI-Solutions y sus proveedores de
              servicios pondrán en cada momento todos los medios disponibles
              para garantizar la adecuada estabilidad del servicio de mAI-Cover,
              así como la protección y salvaguarda de la información de los
              usuarios.
            </p>
            <br />
            <p>
              En este sentido, se llevarán a cabo procesos de testing,
              encriptación, copias de seguridad, e identificación de debilidades
              en el desarrollo.
            </p>
            <br />
            <p>
              Sin embargo, el usuario de mAI-Cover debe ser consciente de que en
              la actualidad no es posible garantizar al 100% la seguridad e
              integridad de la información transmitida por internet, ni el
              impacto que posibles desastres puedan tener en la integridad de la
              información. Por este motivo mAI-Solutions y sus administradores,
              no se hacen responsables de la integridad del servicio ante estas
              eventualidades.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">
              Ley Aplicable y Resolución de Disputa
            </p>
            <p>
              Las normas de las presentes condiciones generales se rigen por la
              Ley de España. Cualquier diferencia que pueda surgir en cuanto a
              la interpretación, cumplimiento y/o ejecución, de las presentes
              normas se someterán expresamente a la jurisdicción de los Jueces y
              Tribunales competentes de Madrid Capital, con renuncia expresa, a
              cualquier otro fuero.
            </p>
          </li>
          <li className="my-5">
            <p className="font-semibold my-3">
              Cambios en los Términos y Condiciones
            </p>
            <p>
              mAI-Solutions y sus administradores se reservan el derecho de
              poder hacer modificaciones sobre los presentes términos y
              condiciones.
            </p>
            <br />
            <p>
              Estas modificaciones serán notificadas a los usuarios por email,
              con al menos un mes de preaviso.{' '}
            </p>
          </li>
        </ul>
        <br />
        <div>
          <p className="font-semibold text-center">
            La utilización de nuestra aplicación web, supone la aceptación
            tácita de los Términos y Condiciones expuestos.
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

export default TermsConditionsPage
