import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateTransactionService } from '../services/CreateTransactionService'

class CreateTransactionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, categoria, preco, status, observations, metodo, userId } =
        request.body as {
          name: string
          categoria: string
          preco: string
          status: string
          metodo: string
          observations: string
          userId: string
        }

      // // Verifique se userId está presente em request.user
      // const userId = (request.user as { userId: string })?.userId

      // if (!userId) {
      //   console.error('User not authenticated or userId missing')
      //   return reply.status(401).send({ error: 'Usuário não autenticado' })
      // }

      const transactionService = new CreateTransactionService()
      const transaction = await transactionService.execute({
        name,
        categoria,
        preco,
        status,
        observations,
        metodo,
        userId,
      })
      reply.send(transaction)
    } catch (err) {
      console.error('Error in CreateTransactionController.handle:', err)
      return reply.status(500).send({ error: 'Erro ao criar transação' })
    }
  }
}

export { CreateTransactionController }
