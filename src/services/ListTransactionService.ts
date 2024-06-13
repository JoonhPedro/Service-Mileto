import prismaClient from '../prisma'

class ListTransactionService {
  async execute() {
    try {
      const transaction = await prismaClient.transaction.findMany()
      return transaction
    } catch (err) {
      return err
    }
  }
}

export { ListTransactionService }
