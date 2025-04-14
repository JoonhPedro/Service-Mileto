import { NotFound } from '../../shared/utils/NotFound'

class UserCreate extends NotFound {
  constructor() {
    super('user_Error_Create')
    this.name = 'userErrorCreate'
    this.message = 'Erro inesperado ao criar usuário'
  }
}

export { UserCreate }
