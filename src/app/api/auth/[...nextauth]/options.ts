import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { GithubProfile } from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prismaClient'
import { loginSchema } from '@/schema/user.schema'
import { verify } from 'argon2'

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
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
            console.log('algo hace', user)

            return user
          } else {
            return null
          }
        }

        return user
      },
    }), // ...add more providers here
  ],
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
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
