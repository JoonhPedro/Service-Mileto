import prismaClient from '../prisma'

interface FeedBackServiceProps {
  userId: string
  message: string
  imagem: string
}

class FeedBackService {
  async execute({ message, imagem, userId }: FeedBackServiceProps) {
    try {
      const feedback = await prismaClient.feedBack.create({
        data: {
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
