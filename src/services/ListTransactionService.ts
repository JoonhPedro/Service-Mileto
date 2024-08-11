import prismaClient from '../prisma'
import { ListTransactions } from '../errors/Transactions'

class ListTransactionService {
  async execute() {
    try {
      const transaction = await prismaClient.transaction.findMany()
      return transaction
    } catch (err) {
      if (err instanceof Error) {
        throw new ListTransactions()
      }
      return (err as Error).message
    }
  }
}

export { ListTransactionService }
