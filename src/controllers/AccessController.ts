import { FastifyReply, FastifyRequest } from 'fastify'
import { AccessService } from '../services/AccessService'

class AccessController {
  private accessService = new AccessService()

  async login(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as {
      email: string
      password: string
    }

    try {
      const result = await this.accessService.login({ email, password })
      reply.send(result)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Erro inesperado'
      reply.status(401).send({ error: errorMessage })
    }
  }
}

export { AccessController }
