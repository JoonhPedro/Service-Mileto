import { FastifyReply, FastifyRequest } from 'fastify'
import { UseListTransaction } from '../useCases/Transactions'

class ListTrasactionsControllers {
  private ListTrasactions: UseListTransaction

  constructor() {
    this.ListTrasactions = new UseListTransaction()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.ListTrasactions.handle(request, reply)
  }
}

export { ListTrasactionsControllers }
