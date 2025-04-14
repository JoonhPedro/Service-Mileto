import { FastifyReply, FastifyRequest } from 'fastify'
import { ListTermo } from '../useCases/Termo'

class ListTermoController {
  private ListTermo: ListTermo

  constructor() {
    this.ListTermo = new ListTermo()
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    await this.ListTermo.handle(request, reply)
  }
}

export { ListTermoController }
