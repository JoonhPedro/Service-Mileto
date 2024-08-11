import { NotFound } from '../../shared/utils/notFound'

class ListUser extends NotFound {
  constructor() {
    super('List_Error_Create')
    this.name = 'ListUser'
    this.message = 'Erro inesperado ao listar usuário'
  }
}

export { ListUser }
