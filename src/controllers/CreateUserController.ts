import { FastifyReply, FastifyRequest } from 'fastify'
import { UsaCaseCreateUser } from '../useCases/AddedUsers' 

class CreateUserController {
  private useCase: UsaCaseCreateUser

  constructor() {
    this.useCase = new UsaCaseCreateUser()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.useCase.handle(request, reply)
  }
}

export { CreateUserController }
