import { ListTermo } from '../errors/Termo'
import prismaClient from '../prisma'

class ListTermoService {
  async execute() {
    try {
      const termo = await prismaClient.termo.findMany()
      return termo
    } catch (err) {
      if (err instanceof Error) {
        throw new ListTermo()
      }
      return (err as Error).message
    }
  }
}

export { ListTermoService }
