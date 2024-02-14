import { type Response, type NextFunction } from 'express'
import { responseError } from './response.handler'
import { type newError } from '@interfaces/errorExtends.interface'
import { registerLog } from '@middlewares/loggerError'
import { type newReq } from '@interfaces/reqExtends.interface'

function errorHandle(err: newError, req: newReq, res: Response, next: NextFunction): any {
  const message = err.message || 'Error interno'
  const status = err.statusCode ?? 500
  responseError(req, res, message, status)
  const user = req.user ? req.user : 'Sistema'
  const idusuario = req.idUsuario ? req.idUsuario : 0
  const messageLog = {
    usuario: { codigo: user, id: idusuario },
    log: message,
  }
  registerLog.error(`${JSON.stringify(messageLog)}`)
}

export { errorHandle }
