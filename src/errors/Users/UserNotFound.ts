import { NotFound } from '../../shared/utils/NotFound'

class UserNotFound extends NotFound {
  constructor() {
    super('user_not_found')
    this.name = 'UserNotFound'
  }
}

export { UserNotFound }
