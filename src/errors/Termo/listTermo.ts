import { NotFound } from '../../shared/utils/NotFound'

class ListTermo extends NotFound {
  constructor() {
    super('list_termo')
    this.name = 'ListTermo'
    this.message = 'Erro ao listar Termo'
  }
}

export { ListTermo }
