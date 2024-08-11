/* eslint-disable new-cap */
import { CreateUserDTO } from '../dtos/Users/CreateUserDTO'
import { userCreate, userEmailIsAlready } from '../errors/Users'
import prismaClient from '../prisma'
import bcrypt from 'bcrypt'

class CreateUserService {
  async execute({ email, password, name }: CreateUserDTO) {
    try {
      const existingEmail = await prismaClient.user.findUnique({
        where: { email },
      })

      if (existingEmail) {
        throw new userEmailIsAlready()
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await prismaClient.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      })

      return { user }
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      } else {
        throw new userCreate()
      }
    }
  }
}

export { CreateUserService }
