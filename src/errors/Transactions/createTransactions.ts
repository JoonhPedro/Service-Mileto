import { NotFound } from '../../shared/utils/NotFound'

class CreateTransactions extends NotFound {
  constructor() {
    super('create_transactions')
    this.name = 'CreateTransactions'
    this.message = 'Erro ao criar Transactions'
  }
}

export { CreateTransactions }
