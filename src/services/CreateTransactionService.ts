import prismaClient from '../prisma'

interface CreateTransactionServiceProps {
  name: string
  categoria: string
  preco: string
  status: string
  metodo: string
  observations: string
  userId: string
}

class CreateTransactionService {
  async execute({
    name,
    categoria,
    preco,
    metodo,
    observations,
    status,
    userId,
  }: CreateTransactionServiceProps) {
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
      console.error('Error in CreateTransactionService.execute:', err)
      throw err
    }
  }
}

export { CreateTransactionService }
