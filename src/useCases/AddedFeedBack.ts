import { FastifyReply, FastifyRequest } from 'fastify'
import { FeedBackService } from '../services/FeedBackService'

class AddedFeedBack {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { message, imagem, userId } = request.body as {
        message: string
        imagem: string
        userId: string
      }

      const feedBackService = new FeedBackService()
      const feedBack = await feedBackService.execute({
        message,
        imagem,
        userId,
      })
      reply.send(feedBack)
    } catch (err) {
      console.error('Error in Enviar FeedBack:', err)
      return reply.status(500).send({ error: 'Erro ao enviar FeedBack' })
    }
  }
}

export { AddedFeedBack }
