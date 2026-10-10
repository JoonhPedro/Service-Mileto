import cors from '@fastify/cors'
import dotenv from 'dotenv'
import Fastify from 'fastify'
import { routes } from './routes'

dotenv.config()
const porta = '4000'

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message, status: error.statusCode })
})

app.register(cors)
app.register(routes)

export default app;

const start = async () => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      await app.listen({ port: 4000, host: '0.0.0.0' })
      console.info(`📄️ Server Transactions started! ${porta}`)
    }
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err)
    process.exit(1)
  }
}

start()
