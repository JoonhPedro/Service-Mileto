import { CreateTransactionsDTO } from '../dtos/Transactions/CreateTransactionsDTO'
import { CreateTransactions } from '../errors/Transactions'
import prismaClient from '../prisma'

class CreateTransactionService {
  async execute({
    name,
    categoria,
    preco,
    metodo,
    observations,
    status,
    userId,
  }: CreateTransactionsDTO) {
    try {
      const transaction = await prismaClient.transaction.create({
        data: {
          name,
          categoria,
          preco,
          metodo,
          observations,
          status,
          userId,
        },
      })

      return transaction
    } catch (err) {
      if (err as Error) {
        throw new CreateTransactions()
      }
      return (err as Error).message
    }
  }
}

export { CreateTransactionService }
