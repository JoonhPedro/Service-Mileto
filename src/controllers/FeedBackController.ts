import { FastifyReply, FastifyRequest } from 'fastify'
import { AddedFeedBack } from '../useCases/FeedBack'

class FeedBackController {
  private AddedFeedBack: AddedFeedBack

  constructor() {
    this.AddedFeedBack = new AddedFeedBack()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.AddedFeedBack.handle(request, reply)
  }
}

export { FeedBackController }
