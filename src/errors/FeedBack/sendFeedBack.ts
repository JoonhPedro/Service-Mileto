import { NotFound } from '../../shared/utils/NotFound'

class SendFeedBack extends NotFound {
  constructor() {
    super('send_feedBack')
    this.name = 'send_feedback'
    this.message = 'Erro ao enviar FeedBack'
  }
}

export { SendFeedBack }
