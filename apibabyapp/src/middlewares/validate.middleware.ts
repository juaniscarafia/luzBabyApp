/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Joi from 'joi'
import { HttpException } from '@utils/error.utils'
import { pick } from '@utils/pike'
import { type NextFunction, type Response, type Request } from 'express'

export const validate = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
  const validSchema = pick(schema, ['params', 'query', 'body'])
  const object = pick(req, Object.keys(validSchema))
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object)

  if (error != null) {
    const errorMessage = error.details.map((details) => details.message).join(', ')
    next(HttpException(errorMessage, 422))
  }
  Object.assign(req, value)
  next()
}
