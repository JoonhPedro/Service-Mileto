import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserService } from '../services/CreateUserService'

class UseCaseCreateUser {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, password, name } = request.body as {
        email: string
        password: string
        name: string
      }
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

      reply.status(201).send(user)
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('Email já está em uso')) {
          reply.status(400).send({ error: err.message })
        } else {
          reply.status(500).send({ error: 'Erro ao criar usuário' })
        }
      } else {
        reply.status(500).send({ error: 'Erro interno do servidor' })
      }
    }
  }
}

export { UseCaseCreateUser }
