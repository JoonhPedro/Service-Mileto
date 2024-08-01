import { FastifyReply, FastifyRequest } from 'fastify'
import { AddedFeedBack } from '../useCases/AddedFeedBack' 

class FeedBackController {
  private useCase: AddedFeedBack

  constructor() {
    this.useCase = new AddedFeedBack()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.useCase.handle(request, reply)
  }
}

export { FeedBackController }
