import { FastifyReply, FastifyRequest } from 'fastify'
import { ListTransactionService } from '../services/ListTransactionService'

class ListTransactionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const listTransactionService = new ListTransactionService()
      const transaction = await listTransactionService.execute()
      reply.send(transaction)
    } catch (err) {
      return err
    }
  }
}

export { ListTransactionController }

