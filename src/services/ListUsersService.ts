import prismaClient from '../prisma';

interface ListUsersServiceProps {
  email?: string;
  name?: string;
  created_at?: string
  updated_at?: string
}

class ListUsersService {
  async execute({ email, name, created_at, updated_at }: ListUsersServiceProps) {
    try {
      const users = await prismaClient.user.findMany({
        where: {
          email: email,
          name: name,
          created_at: created_at,
          updated_at: updated_at,
        },
        select: {
          id: true,
          email: true,
          name: true,
          created_at: true,
          updated_at: true
        },
      });
      return users;
    } catch (err) {
      return err;
    }
  }
}

export { ListUsersService };

