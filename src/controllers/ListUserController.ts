import { FastifyReply, FastifyRequest } from 'fastify'
import { UseListUsers } from '../useCases/Users/ListUser'

class ListUsersController {
  private ListUsers: UseListUsers

  constructor() {
    this.ListUsers = new UseListUsers()
    console.log(this?.ListUsers.handle.name)
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.ListUsers.handle(request, reply)
  }
}

export { ListUsersController }
