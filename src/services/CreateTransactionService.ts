import prismaClient from '../prisma'

interface CreateTransactionServiceProps {
  name: string
  categoria: string
  preco: string
  status: string
  metodo: string
}

class CreateTransactionService {
  async execute({
    name,
    categoria,
    preco,
    metodo,
    status,
  }: CreateTransactionServiceProps) {
    try {
      const transaction = await prismaClient.transaction.create({
        data: {
          name,
          categoria,
          preco,
          metodo,
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
