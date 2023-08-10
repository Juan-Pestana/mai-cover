import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request: NextRequestWithAuth) {
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
    //   request.nextauth.token?.role !== 'admin' &&
    //   request.nextauth.token?.role !== 'user'
    // ) {
    //   console.log('consideramos que no tiene los roles par este path')
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = { matcher: ['/api/cover_ver'] }
