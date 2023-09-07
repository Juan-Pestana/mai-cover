interface ContactEmailProps {
  userName: string
}

export const SignUpEmailTemlate = ({ userName }: ContactEmailProps) => (
  <div>
    <p>Estimado/a {userName}</p>
    <p>
      ¡Es un placer darte la bienvenida a mAI-Cover! Nos alegra contar contigo
      en esta revolucionaria herramienta diseñada para empoderar a profesionales
      como tú en el mundo de los Recursos Humanos y la búsqueda de empleo.
    </p>
    <p>¿Qué te ofrecemos en mAI-Cover?</p>
    <ol>
      <li>
        <p>
          <b>Cartas de Presentación Personalizadas:</b>
          ¿Quieres destacar entre los demás candidatos? Nuestra inteligencia
          artificial crea cartas de presentación adaptadas a la oferta y a tu
          perfil, captando la atención de los reclutadores desde el primer
          momento.
        </p>
      </li>{' '}
      <li>
        <p>
          <b>Recomendaciones para tu CV:</b>
          Adaptar tu currículum a cada oferta es esencial. Obtén sugerencias
          específicas para alinear tu CV a las expectativas del empleador.
        </p>
      </li>
      <li>
        <p>
          <b>Descripciones de Puesto Adaptadas:</b>
          Añade o adapta descripciones de puestos en tu CV para reflejar tu
          experiencia y habilidades de la manera más relevante y atractiva.
        </p>
      </li>
      <li>
        <p>
          <b>Redacción de Feedback y Cartas de Recomendación:</b>
          ¿Necesitas proporcionar retroalimentación o recomendar a un colega?
          Genera estos documentos con facilidad, profesionalismo y
          personalización.
        </p>
      </li>
    </ol>
    <p>
      <b>Comienza ahora:</b>
    </p>
    <ol>
      <li>
        <p>Ingresa a tu perfil y completa tus detalles.</p>
      </li>
      <li>
        <p>
          Navega por las opciones y familiarízate con las herramientas
          disponibles.
        </p>
      </li>
      <li>
        <p>¡Empieza a generar tus documentos!</p>
      </li>
    </ol>
    <p>
      Si tienes alguna pregunta o necesitas ayuda, no dudes en contactar a
      nuestro equipo de soporte. Estamos aquí para asegurarnos de que tu
      experiencia con mAi-Cover sea excepcional.
    </p>
    <br />
    <p>
      ¡Adelante, da un paso hacia un futuro más brillante y profesional con
      mAI-Cover!
    </p>
    <br />
    <p>Cordialmente:</p>
    <p>Juan Pestana</p>
    <p>
      <b>Builder en mAI-Cover</b>
    </p>
  </div>
)
