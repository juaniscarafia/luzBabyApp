import Joi from 'joi'

export const queryMeasureMilkDto = {
  query: Joi.object().keys({
    pageSize: Joi.number().integer().min(1).max(500).optional().messages({
      'number.base': 'El campo pageSize debe ser un número entero',
      'number.min': 'El campo pageSize debe ser igual o mayor a 1',
      'number.max': 'El campo pageSize debe ser igual o menor a 500',
      'any.required': 'El campo pageSize es un campo obligatorio',
    }),
    pageNumber: Joi.number().integer().min(1).max(20).optional().messages({
      'number.base': 'El campo pageNumber debe ser un entero',
      'number.min': 'El campo pageNumber debe ser igual o mayor a 1',
      'number.max': 'El campo pageNumber debe ser igual o menor a 20',
      'any.required': 'El campo pageNumber es un campo obligatorio',
    }),
  }),
}

export const InsertMeasureMilkDto = {
  body: Joi.object().keys({
    date: Joi.string().required().length(8).messages({
      'number.base': 'El campo date debe ser un texto, formato YYYYMMDD',
      'number.length': 'El campo date debe tener longitud 8',
    }),
    time: Joi.string()
      .max(5)
      .required()
      // eslint-disable-next-line no-useless-escape
      .regex(/^([0-2]{1})([0-9]{1})\:([0-5]{1})([0-9]{1})$/)
      .messages({
        'string.max':
          'El campo time no puede ser mayor a 5 caracteres, formato HH:MM',
        'object.regex': 'El campo time debe tener el formato HH:MM',
        'string.pattern.base':
          'El campo time debe ser una cadena de caracteres, formato HH:MM',
      }),
    measure: Joi.number().integer().required().min(1).messages({
      'number.base': 'El campo measure debe ser un número entero',
      'number.min': 'El campo measure debe ser igual o mayor a 1',
      'any.required': 'El campo measure es un campo obligatorio',
    }),
    idmilk: Joi.number().integer().required().min(1).messages({
      'number.base': 'El campo idmilk debe ser un número entero',
      'number.min': 'El campo idmilk debe ser igual o mayor a 1',
      'any.required': 'El campo idmilk es un campo obligatorio',
    }),
  }),
}

export const UpdateMeasureMilkDto = {
  params: Joi.object().keys({
    id: Joi.number().integer().min(1).required().messages({
      'number.base': 'El campo id debe ser un número entero',
      'number.min': 'El campo id debe ser igual o mayor a 1',
      'any.required': 'El campo id es un campo obligatorio',
    }),
  }),
  body: Joi.object().keys({
    date: Joi.string().required().length(8).messages({
      'number.base': 'El campo date debe ser un texto, formato YYYYMMDD',
      'number.length': 'El campo date debe tener longitud 8',
    }),
    time: Joi.string()
      .max(5)
      .required()
      // eslint-disable-next-line no-useless-escape
      .regex(/^([0-2]{1})([0-9]{1})\:([0-5]{1})([0-9]{1})$/)
      .messages({
        'string.max':
          'El campo time no puede ser mayor a 5 caracteres, formato HH:MM',
        'object.regex': 'El campo time debe tener el formato HH:MM',
        'string.pattern.base':
          'El campo time debe ser una cadena de caracteres, formato HH:MM',
      }),
    measure: Joi.number().integer().required().min(1).messages({
      'number.base': 'El campo measure debe ser un número entero',
      'number.min': 'El campo measure debe ser igual o mayor a 1',
      'any.required': 'El campo measure es un campo obligatorio',
    }),
    idmilk: Joi.number().integer().required().min(1).messages({
      'number.base': 'El campo idmilk debe ser un número entero',
      'number.min': 'El campo idmilk debe ser igual o mayor a 1',
      'any.required': 'El campo idmilk es un campo obligatorio',
    }),
  }),
}

export const DeleteMeasureMilkDto = {
  params: Joi.object().keys({
    id: Joi.number().integer().min(1).required().messages({
      'number.base': 'El campo id debe ser un número entero',
      'number.min': 'El campo id debe ser igual o mayor a 1',
      'any.required': 'El campo id es un campo obligatorio',
    })
  }),
}
