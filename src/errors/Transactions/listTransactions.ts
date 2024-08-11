import { NotFound } from '../../shared/utils/notFound'

class ListTransactions extends NotFound {
  constructor() {
    super('list_transactions')
    this.name = 'ListTransactions'
    this.message = 'Erro ao listar Transactions'
  }
}

export { ListTransactions }
