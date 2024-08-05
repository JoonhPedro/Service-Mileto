import { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'

const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authHeader = request.headers.authorization
    if (!authHeader) {
      return reply.status(401).send({ error: 'Token não fornecido' })
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
      return reply.status(401).send({ error: 'Token inválido' })
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'default_secret'
    ) as { userId: string; email: string }

    request.user = decoded
    return true
  } catch (err) {
    return reply.status(401).send({ error: 'Token inválido ou expirado' })
  }
}

export { authenticate }
