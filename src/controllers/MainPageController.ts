import { FastifyReply, FastifyRequest } from 'fastify'
import { authenticate } from '../auth/index'

class MainPageController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const isAuthenticated = await authenticate(request, reply)
    if (!isAuthenticated) return

    reply.status(200).send({ message: 'Bem-vindo à página principal!' })
  }
}

export { MainPageController }
