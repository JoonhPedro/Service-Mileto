import { NotFound } from '../../shared/utils/NotFound'

class ListTransactions extends NotFound {
  constructor() {
    super('list_transactions')
    this.name = 'ListTransactions'
    this.message = 'Erro ao listar Transactions'
  }
}

export { ListTransactions }
