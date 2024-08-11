import { NotFound } from '../../shared/utils/notFound'

class server extends NotFound {
  constructor() {
    super('serverError')
    this.name = 'serverError'
    this.message = 'Erro interno do servidor'
  }
}

export { server }
