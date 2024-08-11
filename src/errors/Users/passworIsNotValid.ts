import { NotFound } from '../../shared/utils/notFound'

class PasswordInValid extends NotFound {
  constructor() {
    super('password_inValid')
    this.name = 'PasswordInValid'
    this.message = 'Senha inválida'
  }
}

export { PasswordInValid }
