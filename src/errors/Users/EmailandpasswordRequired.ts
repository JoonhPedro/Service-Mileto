import { NotFound } from '../../shared/utils/notFound'

class EmailPasswordRequered extends NotFound {
  constructor() {
    super('email_and_password_Requered')
    this.name = 'EmailPasswordRequered'
    this.message = 'Email e senha são obrigatórios'
  }
}

export { EmailPasswordRequered }
