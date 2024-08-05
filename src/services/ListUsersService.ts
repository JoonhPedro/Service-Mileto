import prismaClient from '../prisma'

interface ListUsersServiceProps {
  email?: string
  name?: string
  created_at?: string
  updated_at?: string
}

class ListUsersService {
  async execute({ email, name }: ListUsersServiceProps) {
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
