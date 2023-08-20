import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { prisma } from './lib/prismaClient'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  async function middleware(request: NextRequestWithAuth) {
    //cualquier ruta sobre la que apliquemos el middleware, requerirá autenticación,
    //aunque no pongamos nada más aquí, redirigirá al usuario a Signin si no está autenticado.
    //Todo lo demás que podamos hacer aquí es para control de roles
    //Por lo tanto, este check es innecesario
    // console.log(request.nextUrl.pathname)
    // if (!request.nextauth.token) {
    //   return NextResponse.redirect('http://localhost:3000/signin')
    // }
    //éste es el tipo de checks que haríamos aquí
    // if (
    //   request.nextUrl.pathname.startsWith('/api/cover_ver') &&
    //   request.nextauth.token?.role !== 'client' &&
    //   request.nextauth.token?.role !== 'user'
    // ) {
    //   console.log('consideramos que no tiene los roles par este path')
    // }

    if (request.nextUrl.pathname.startsWith('/api/cover_ver')) {
      const res = await fetch(
        `http://localhost:3000/api/available_docs/${request.nextauth.token?.id}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          },
        }
      )

      //console.log('puta response', response)
      if (!res.ok) {
        const response = await res.json()

        return new NextResponse(JSON.stringify({ message: response.message }), {
          status: res.status,
          headers: { 'content-type': 'application/json' },
        })
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = { matcher: ['/api/cover_ver'] }
