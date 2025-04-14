import { FastifyInstance } from 'fastify'
import {
  AccessController,
  CreateTransactionController,
  CreateUserController,
  FeedBackController,
  ListTermoController,
  ListTrasactionsControllers,
  ListUsersController,
  MainPageController,
} from './controllers/index'

import { authenticate } from './auth/index'

const message = 'Service Transactions Rodando'

export async function routes(app: FastifyInstance) {
  app.get('/', async () => {
    return message
  })

  app.post('/users', async (request, reply) => {
    const controller = new CreateUserController()
    await controller.handle(request, reply)
  })

  app.post('/login', async (request, reply) => {
    const controller = new AccessController()
    await controller.login(request, reply)
  })

  app.post(
    '/transactions',
    { preHandler: authenticate },
    async (request, reply) => {
      return new CreateTransactionController().handle(request, reply)
    }
  )

  app.get(
    '/transactions',
    { preHandler: authenticate },
    async (request, reply) => {
      return new ListTrasactionsControllers().handle(request, reply)
    }
  )

  app.get('/termo', { preHandler: authenticate }, async (request, reply) => {
    return new ListTermoController().handle(request, reply)
  })

  app.get('/users', { preHandler: authenticate }, async (request, reply) => {
    return new ListUsersController().handle(request, reply)
  })

  app.post(
    '/feedback',
    { preHandler: authenticate },
    async (request, reply) => {
      return new FeedBackController().handle(request, reply)
    }
  )

  app.get('/main', { preHandler: authenticate }, async (request, reply) => {
    const controller = new MainPageController()
    await controller.handle(request, reply)
  })
}
