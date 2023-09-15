import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import LinkedinProvider from 'next-auth/providers/linkedin'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prismaClient'
import { loginSchema } from '@/schema/user.schema'
import { verify } from 'argon2'

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      authorization: {
        params: { scope: 'openid profile email' },
      },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile(profile, tokens) {
        const defaultImage =
          'https://cdn-icons-png.flaticon.com/512/174/174857.png'
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@acme.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const creds = await loginSchema.parseAsync(credentials)

        const user = await prisma.user.findFirst({
          where: { email: creds.email },
        })

        if (!user) {
          return null
        }
        if (user.hashedPassword) {
          const isValidPassword = await verify(
            user.hashedPassword,
            creds.password
          )
          if (isValidPassword) {
            return user
          } else {
            return null
          }
        }

        return user
      },
    }), // ...add more providers here
  ],
  callbacks: {
    async session({ session, token, trigger, newSession }) {
      //  console.log('este es el trigger en session', trigger)

      if (trigger === 'update') {
        console.log('actualización de session', newSession)
        session.user.role === newSession.user.role
      }

      if (session?.user) {
        session.user.role = token.role
        session.user.id = token.id
      }
      return session
    },
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user, trigger, session, account }) {
      // console.log('este es el trigger en token', trigger)
      if (trigger === 'update') {
        //   console.log('actualizando del token', session)

        token.role = session.role
      }
      if (account) {
        token.access_token = account.access_token
      }

      if (user) {
        token.role = user.role!
        token.id = user.id
      }
      return token
    },
    // If you want to use the role in client components
  },
  events: {
    async createUser({ user }) {
      const res = await fetch('/api/send/welcome', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          userName: user.name,
          email: user.email,
        }),
      })
      if (!res.ok) {
        console.log(`el email de Bienvenida no se ha enviado a ${user.email}`)
      }
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
    newUser: '/',
  },
  debug: false,
}
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       /* Step 1: update the token based on the user object */
//       if (user) {
//         token.role = await user.role
//         token.id = await user.id
//       }
//       return token
//     },

//     session: async ({ session, token }) => {
//       if (session?.user) {
//         session.user.role = await token.role
//         session.user.id = await token.id
//       }
//       return session
//     },
//   },
