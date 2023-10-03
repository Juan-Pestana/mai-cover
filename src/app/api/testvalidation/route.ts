import { ZodError } from 'zod'
import { ISignUp, signUpSchema } from '../../../schema/user.schema'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data: ISignUp = await req.json()

  try {
    const cleanNewUserData = signUpSchema.parse(data)

    //do something with the clean data
    console.log(cleanNewUserData)

    return NextResponse.json(cleanNewUserData)
  } catch (err) {
    //send back error
    if (err instanceof ZodError) {
      return NextResponse.json(err, { status: 400 })
    }
    //some other error handling
  }
}
