import { NotFound } from '../../shared/utils/NotFound'

class UserLogin extends NotFound {
  constructor() {
    super('user_Error_login')
    this.name = 'userErrorLogin'
    this.message = 'Erro ao fazer login'
  }
}

export { UserLogin }
