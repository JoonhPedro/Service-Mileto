import { NotFound } from '../../shared/utils/notFound'

class userCreate extends NotFound {
  constructor() {
    super('user_Error_Create')
    this.name = 'userErrorCreate'
    this.message = 'Erro inesperado ao criar usuário'
  }
}

export { userCreate }
