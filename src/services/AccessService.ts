import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prismaClient from '../prisma'
import { LoginUserDTO } from '../dtos/Users/LoginUserDTO'
import {
  PasswordInValid,
  EmailPasswordInValid,
  EmailPasswordRequered,
} from '../errors/Users'
import { UserLogin } from '../errors/Users'
import { UserResponseDTO } from '../dtos/Users/'

class AccessService {
  async login({ email, password }: LoginUserDTO): Promise<UserResponseDTO> {
    if (!email || !password) {
      throw new EmailPasswordRequered()
    }

    try {
      const user = await prismaClient.user.findUnique({
        where: { email },
      })

      if (!user) {
        throw new EmailPasswordInValid()
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        throw new PasswordInValid()
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '1h' }
      )

      return { user, token }
    } catch (err) {
      throw new UserLogin()
    }
  }
}

export { AccessService }
