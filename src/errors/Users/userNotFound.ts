import { NotFound } from '../../shared/utils/notFound'

class userNotFound extends NotFound {
  constructor() {
    super('user_not_found')
    this.name = 'UserNotFound'
  }
}

export { userNotFound }
