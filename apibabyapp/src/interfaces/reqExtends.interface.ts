import { type Request } from 'express'

export interface newReq extends Request {
  user?: string
  idUsuario?: number
}
