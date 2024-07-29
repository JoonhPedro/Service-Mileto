import { FastifyInstance } from 'fastify'
import { AccessController } from './controllers/AccessController'
import { CreateTransactionController } from './controllers/CreateTransactionController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListTermoController } from './controllers/ListTermoControllers'
import { ListTransactionController } from './controllers/ListTransactionControllers'
import { ListUsersController } from './controllers/ListUserController'

const message = 'Service Transactions Rodando'

export async function routes(app: FastifyInstance) {
  app.get('/', async () => {
    return message
  })
  app.post('/transactions', async (request, reply) => {
    return new CreateTransactionController().handle(request, reply)
  })
  app.get('/transactions', async (request, reply) => {
    return new ListTransactionController().handle(request, reply)
  })
  app.get('/termo', async (request, reply) => {
    return new ListTermoController().handle(request, reply)
  })
  app.post('/users', async (request, reply) => {
    const controller = new CreateUserController()
    await controller.handle(request, reply)
  })
  app.get('/users', async (request, reply) => {
    return new ListUsersController().handle(request, reply)
  })
  app.post('/login', async (request, reply) => {
    const controller = new AccessController()
    await controller.login(request, reply)
  })
}
