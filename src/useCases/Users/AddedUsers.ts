import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserService } from '../../services/CreateUserService'
import { CreateUserDTO, UserResponseDTO } from '../../dtos/Users'
import { UserEmailIsAlready } from '../../errors/Users'

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
      const data = await userService.execute({
        email,
        password,
        name,
      })

      if (!data?.user) {
        return reply.status(500).send({ error: 'Erro ao criar usuário' })
      }
      const userReturn = {} as UserResponseDTO
      return reply.status(201).send(userReturn)
    } catch (err) {
      console.error("CREATE_USER_ERROR", err)
      if (err instanceof UserEmailIsAlready) {
        return reply.status(400).send({ error: 'Email já cadastrado' })
      }
      const errMessage = err instanceof Error ? err.message : String(err)
      return reply.status(500).send({ error: 'Erro ao criar usuário', details: errMessage })
    }
  }
}

export { UseCaseCreateUser }
