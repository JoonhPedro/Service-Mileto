import { FastifyReply, FastifyRequest } from 'fastify';
import { ListUsersService } from '../services/ListUsersService';

interface ListUserProps {
  name?: string;
  email?: string;
  created_at?: string
  updated_at?: string
}

class ListUsersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, name, created_at, updated_at } = request.query as ListUserProps;
      const listUsersService = new ListUsersService();
      const users = await listUsersService.execute({ email, name, created_at, updated_at });
      reply.send(users);
    } catch (err) {
      reply.status(500).send(err);
    }
  }
}

export { ListUsersController };

