interface ContactEmailProps {
  name: string
  lastName: string
  email: string
  message: string
}

export const ContactEmailTemlate = ({
  name,
  lastName,
  email,
  message,
}: ContactEmailProps) => (
  <div>
    <h1>
      {name} {lastName} con el email: {email}
    </h1>
    <p>te ha enviado un mensaje:</p>
    <p>{message}</p>
  </div>
)
