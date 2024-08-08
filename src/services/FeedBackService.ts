import { FeedBackDTO } from '../dtos/FeedBack/FeedBackDTO'
import prismaClient from '../prisma'

class FeedBackService {
  async execute({ message, imagem, userId, title }: FeedBackDTO) {
    try {
      const feedback = await prismaClient.feedBack.create({
        data: {
          title,
          imagem,
          message,
          userId,
        },
      })

      return feedback
    } catch (err) {
      console.error('Error in enviar feedback:', (err as Error).message)
      throw err
    }
  }
}

export { FeedBackService }
