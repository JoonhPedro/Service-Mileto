import { FastifyReply, FastifyRequest } from 'fastify'
import { ListUsersService } from '../../services/ListUsersService'
import { ListUsersDTO } from '../../dtos/Users/ListUsersDTO'

class UseListUsers {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, name } = request.query as ListUsersDTO
      const listUsersService = new ListUsersService()
      const users = await listUsersService.execute({
        email,
        name,
      })
      reply.send(users)
    } catch (err) {
      reply.status(500).send(err)
    }
  }
}

export { UseListUsers }
