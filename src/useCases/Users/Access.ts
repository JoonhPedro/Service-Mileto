import { FastifyReply, FastifyRequest } from 'fastify'
import { AccessService } from '../../services/AccessService'
import { AccessDTO } from '../../dtos/Users'

class UseAccess {
  private accessService = new AccessService()

  async login(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as AccessDTO

    try {
      const result = await this.accessService.login({ email, password })
      const { password: _, ...userWithoutPassword } = result.user as any

      reply.send({
        user: userWithoutPassword,
        token: result.token,
      })
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Erro inesperado'
      reply.status(401).send({ error: errorMessage })
    }
  }
}

export { UseAccess }
