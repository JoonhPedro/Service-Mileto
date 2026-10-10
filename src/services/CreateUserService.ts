import { CreateUserDTO } from '../dtos/Users/CreateUserDTO'
import { UserCreate, UserEmailIsAlready } from '../errors/Users'
import prismaClient from '../prisma'
import bcrypt from 'bcryptjs'
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
      console.error("CreateUserService.execute erro:", err)
      if (err instanceof UserEmailIsAlready) {
        throw err
      }
      if (err instanceof Error) {
        throw err // throw the original error instead of just message to keep stack trace
      } else {
        throw new UserCreate()
      }
    }
  }
}

export { CreateUserService }
