import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prismaClient from '../prisma'
import { LoginUserDTO } from '../dtos/Users/LoginUserDTO'
import {
  PasswordInValid,
  EmailPasswordInValid,
  EmailPasswordRequered,
} from '../errors/Users'
import { UserLogin } from '../errors/Users/login'

class AccessService {
  async login({ email, password }: LoginUserDTO) {
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
      if (err as Error) {
        throw new UserLogin()
      }
      return (err as Error).message
    }
  }
}

export { AccessService }
