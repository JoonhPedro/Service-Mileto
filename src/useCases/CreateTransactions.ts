import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateTransactionService } from '../services/CreateTransactionService'
import { CreateTransactionsDTO } from '../dtos/Transactions/CreateTransactionsDTO'

class UseCreateTransactionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, categoria, preco, status, observations, metodo, userId } =
        request.body as CreateTransactionsDTO

      // const verifyuserId = (request.user as { userId: string })?.userId
      // console.log(verifyuserId)

      if (!userId) {
        console.error('User not authenticated or userId missing')
        return reply.status(401).send({ error: 'Usuário não autenticado' })
      }

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

export { UseCreateTransactionController }
