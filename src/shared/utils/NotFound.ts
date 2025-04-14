class NotFound extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NotFound'
    Error.captureStackTrace(this, this.constructor)
  }
}

export { NotFound }
