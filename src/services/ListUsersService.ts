import { ListUsersDTO } from '../dtos/Users/ListUsersDTO'
import prismaClient from '../prisma'

class ListUsersService {
  async execute({ email, name }: ListUsersDTO) {
    try {
      const users = await prismaClient.user.findMany({
        where: {
          email,
          name,
        },
        select: {
          id: true,
          email: true,
          name: true,
          created_at: true,
          updated_at: true,
        },
      })
      return users
    } catch (err) {
      return err
    }
  }
}

export { ListUsersService }
