import { FastifyReply, FastifyRequest } from 'fastify'
import { FeedBackService } from '../../services/FeedBackService'
import { FeedBackDTO } from '../../dtos/FeedBack/FeedBackDTO'
import { SendFeedBack } from '../../errors/FeedBack'

class AddedFeedBack {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { message, imagem, userId, title } = request.body as FeedBackDTO

      const feedBackService = new FeedBackService()
      const feedBack = await feedBackService.execute({
        title,
        message,
        imagem,
        userId,
      })
      reply.send(feedBack)
    } catch (err) {
      if (err instanceof SendFeedBack) {
        return reply.status(500).send({ error: 'Erro ao enviar FeedBack' })
      }
      return (err as Error).message
    }
  }
}

export { AddedFeedBack }
