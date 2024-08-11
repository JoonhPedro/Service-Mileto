import { FastifyReply, FastifyRequest } from 'fastify'
import { UseAccess } from '../useCases/Users'

class AccessController {
  private Access: UseAccess

  constructor() {
    this.Access = new UseAccess()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.Access.login(request, reply)
  }
}

export { AccessController }
