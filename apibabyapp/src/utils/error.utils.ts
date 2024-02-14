import { type newError } from '@interfaces/errorExtends.interface'
function HttpException(message: string, code: number): Error {
  const e: newError = new Error(message)
  if (code) {
    e.statusCode = code
  }
  return e
}

export { HttpException }
