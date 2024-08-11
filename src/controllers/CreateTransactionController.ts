import { FastifyReply, FastifyRequest } from 'fastify'
import { UseCreateTransactionController } from '../useCases'

class CreateTransactionController {
  private createTransaction: UseCreateTransactionController

  constructor() {
    this.createTransaction = new UseCreateTransactionController()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.createTransaction.handle(request, reply)
  }
}

export { CreateTransactionController }
