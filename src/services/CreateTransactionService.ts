import prismaClient from '../prisma'

interface CreateTransactionServiceProps {
  name: string
  categoria: string
  preco: string
  status: string
}

class CreateTransactionService {
  async execute({
    name,
    categoria,
    preco,
    status,
  }: CreateTransactionServiceProps) {
    try {
      const transaction = await prismaClient.transaction.create({
        data: {
          name,
          categoria,
          preco,
          status,
        },
      })

      return transaction
    } catch (err) {
      return err
    }
  }
}

export { CreateTransactionService }
