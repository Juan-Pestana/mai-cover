interface ContactEmailProps {
  userName: string
}

export const ThankYouEmailTemlate = ({ userName }: ContactEmailProps) => (
  <div>
    <p>Estimado/a {userName},</p>
    <p>
      ¡Muchas gracias por adquirir el bono que te permite acceder a 15 nuevas
      generaciones de documentos en mAI-Cover! Es un honor contar con tu
      confianza y estamos encantados de que hayas decidido aprovechar al máximo
      todas las funcionalidades premium que ofrecemos.
    </p>
    <br />
    <p>
      Con este bono no sólo tendrás acceso a generaciones adicionales de
      documentos, sino también a los nuevos tipos de documentos que iremos
      incorporando, permitiéndote estar siempre al frente en el mundo de los
      Recursos Humanos y la búsqueda de empleo.
    </p>
    <br />
    <p>
      Queremos recordarte que nuestro compromiso es ofrecerte herramientas de
      calidad, intuitivas y útiles. Si en algún momento necesitas asistencia o
      tienes alguna sugerencia, no dudes en ponerte en contacto con nuestro
      equipo de soporte. Estamos aquí para ti.
    </p>
    <br />
    <p>
      Una vez más, gracias por confiar en mAI-Cover. ¡Deseamos que tengas un
      éxito rotundo en todas tus gestiones profesionales!
    </p>
    <br />
    <p>Un Saludo</p>
    <p>Juan Pestana</p>
    <p>
      <b>Builder en mAI-Cover</b>
    </p>
  </div>
)
