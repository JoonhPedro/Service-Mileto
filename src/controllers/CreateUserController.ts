import { FastifyReply, FastifyRequest } from 'fastify'
import { UseCaseCreateUser } from '../useCases/AddedUsers'

class CreateUserController {
  private createUser: UseCaseCreateUser

  constructor() {
    this.createUser = new UseCaseCreateUser()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.createUser.handle(request, reply)
  }
}

export { CreateUserController }
