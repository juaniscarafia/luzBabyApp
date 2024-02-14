import { type ResponseApiObject, type ResponseApi } from '@interfaces/responseApi.interface'
import { type Request, type Response } from 'express'

const _response: ResponseApi = {
  error: true,
  status: 500,
  body: 'error interno',
}

const _responseObject: ResponseApiObject = {
  error: true,
  status: 500,
  body: {
    error: 'error interno'
  },
}

export function responseSuccessObject(
  req: Request,
  res: Response,
  message: object,
  status = 200
): any {
  _responseObject.body = message
  _responseObject.error = false
  _responseObject.status = status
  res.status(status).send(_responseObject)
}

export function responseSuccess(
  req: Request,
  res: Response,
  message: string | [] | object,
  status = 200
): any {
  _response.body = message
  _response.error = false
  _response.status = status
  res.status(status).send(_response)
}

export function responseError(
  req: Request,
  res: Response,
  message: string | [] | object = 'Error interno en la aplicación',
  status = 500
): any {
  _response.body = message
  _response.error = true
  _response.status = status
  res.status(status).send(_response)
}
