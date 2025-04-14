import { NotFound } from '../../shared/utils/NotFound'

class EmailPasswordInValid extends NotFound {
  constructor() {
    super('email_or_password_inValid')
    this.name = 'EmailorPasswordInValid'
    this.message = 'Email ou senha inválidos'
  }
}

export { EmailPasswordInValid }
