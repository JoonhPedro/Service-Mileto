import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateTransctionController } from './controllers/CreateTranscationsControllers'
import { ListTransactionController } from './controllers/ListTransactionControllers'
import { ListTermoController } from './controllers/ListTermoControllers'

const message = 'Service Transactions Rodando'

export async function routes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    return message
  })
  fastify.post(
    '/transactions',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateTransctionController().handle(request, reply)
    },
  )
  fastify.get(
    '/transactions',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListTransactionController().handle(request, reply)
    },
  )
  fastify.get(
    '/termo',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListTermoController().handle(request, reply)
    },
  )
}
