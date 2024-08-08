import { CreateTransactionsDTO } from '../dtos/Transactions/CreateTransactionsDTO'
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
      console.error('Error in CreateTransactionService: ', err)
      throw err
    }
  }
}

export { CreateTransactionService }
