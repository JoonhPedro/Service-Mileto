import prismaClient from '../prisma'

class ListTermoService {
  async execute() {
    try {
      const termo = await prismaClient.termo.findMany()
      return termo
    } catch (err) {
      return (err as Error).message
    }
  }
}

export { ListTermoService }
