import { FeedBackDTO } from '../dtos/FeedBack/FeedBackDTO'
import { SendFeedBack } from '../errors/FeedBack'

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
      if (err instanceof Error) {
        throw new SendFeedBack()
      }
      return (err as Error).message
    }
  }
}

export { FeedBackService }
