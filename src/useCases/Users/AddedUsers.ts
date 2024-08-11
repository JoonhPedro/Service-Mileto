import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserService } from '../../services/CreateUserService'
import { CreateUserDTO } from '../../dtos/Users/CreateUserDTO'
import { userEmailIsAlready } from '../../errors/Users'

class UseCaseCreateUser {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, password, name } = request.body as CreateUserDTO

      if (!email || !password || !name) {
        return reply
          .status(400)
          .send({ error: 'Todos os campos são obrigatórios' })
      }

      const userService = new CreateUserService()
      const user = await userService.execute({
        email,
        password,
        name,
      })

      return reply.status(201).send(user)
    } catch (err) {
      if (err instanceof userEmailIsAlready) {
        return reply.status(400).send({ error: 'Email já cadastrado' })
      }
      return reply.status(500).send({ error: 'Erro ao criar usuário' })
    }
  }
}

export { UseCaseCreateUser }
