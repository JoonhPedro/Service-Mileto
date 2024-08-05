import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prismaClient from '../prisma'

interface LoginProps {
  email: string
  password: string
}

class AccessService {
  async login({ email, password }: LoginProps) {
    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios')
    }

    try {
      const user = await prismaClient.user.findUnique({
        where: { email },
      })

      if (!user) {
        throw new Error('Email ou senha inválidos')
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        throw new Error('Senha inválida')
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '24h' }
      )

      return { user, token }
    } catch (err) {
      throw new Error('Erro ao fazer login ' + (err as Error).message)
    }
  }
}

export { AccessService }
