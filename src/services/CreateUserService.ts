import { CreateUserDTO } from '../dtos/Users/CreateUserDTO'
import prismaClient from '../prisma'
import bcrypt from 'bcrypt'

class CreateUserService {
  async execute({ email, password, name }: CreateUserDTO) {
    try {
      const existingEmail = await prismaClient.user.findUnique({
        where: { email },
      })

      if (existingEmail) {
        throw new Error('Email já está em uso')
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
        throw new Error('Erro inesperado ao criar usuário')
      }
    }
  }
}

export { CreateUserService }
