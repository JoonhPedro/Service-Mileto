import { FastifyRequest, FastifyReply } from 'fastify'
import { ListTermoService } from '../services/ListTermoService'

class ListTermoController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const listTermoService = new ListTermoService()
      const termo = await listTermoService.execute()
      reply.send(termo)
    } catch (err) {
      return (err as Error).message
    }
  }
}

export { ListTermoController }
