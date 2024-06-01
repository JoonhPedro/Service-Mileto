import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateTransactionService } from '../services/CreateTransactionService'

class CreateTransctionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, categoria, preco, status, metodo } = request.body as {
        name: string
        categoria: string
        preco: string
        status: string
        metodo: string
      }
      const transactionService = new CreateTransactionService()
      const transaction = await transactionService.execute({
        name,
        categoria,
        preco,
        status,
        metodo,
      })
      reply.send(transaction)
    } catch (err) {
      return err
    }
  }
}

export { CreateTransctionController }
