import { CreateUserDTO } from '../dtos/Users/CreateUserDTO'
import { UserCreate, UserEmailIsAlready } from '../errors/Users'
import prismaClient from '../prisma'
import bcrypt from 'bcrypt'
import { UserResponseDTO } from '../dtos/Users/UserResponseDTO'

class CreateUserService {
  async execute({
    email,
    password,
    name,
  }: CreateUserDTO): Promise<UserResponseDTO> {
    try {
      const existingEmail = await prismaClient.user.findUnique({
        where: { email },
      })

      if (existingEmail) {
        throw new UserEmailIsAlready()
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
        throw new UserCreate()
      }
    }
  }
}

export { CreateUserService }
