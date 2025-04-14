import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateTransactionService } from '../../services/CreateTransactionService'
import { CreateTransactionsDTO } from '../../dtos/Transactions/CreateTransactionsDTO'

class UseCreateTransactionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, categoria, preco, status, observations, metodo, userId } =
        request.body as CreateTransactionsDTO

      if (!userId) {
        console.error('Usuário não autenticado ou ID do usuário ausente')
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
      return reply.status(500).send({ error: 'Erro ao criar transação' })
    }
  }
}

export { UseCreateTransactionController }
