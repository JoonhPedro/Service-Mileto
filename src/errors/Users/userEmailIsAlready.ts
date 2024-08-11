import { NotFound } from '../../shared/utils/notFound'

class userEmailIsAlready extends NotFound {
  constructor() {
    super('user_Email_Is_Already')
    this.name = 'userEmailIsAlready'
    this.message = 'Email já está em uso'
  }
}

export { userEmailIsAlready }
