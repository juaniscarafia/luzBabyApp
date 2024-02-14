import Joi from 'joi'

export const queryBabyWeightDto = {
  query: Joi.object().keys({
    startdate: Joi.string().optional().length(8).messages({
      'number.base': 'El campo startdate debe ser un texto, formato YYYYMMDD',
      'number.length': 'El campo startdate debe tener longitud 8',
    }),
    enddate: Joi.string().optional().length(8).messages({
      'number.base': 'El campo enddate debe ser un texto, formato YYYYMMDD',
      'number.length': 'El campo enddate debe tener longitud 8',
    }),
  }),
}

export const InsertBabyWeightDto = {
  body: Joi.object().keys({
    date: Joi.string().required().length(8).messages({
      'number.base': 'El campo date debe ser un texto, formato YYYYMMDD',
      'number.length': 'El campo date debe tener longitud 8',
    }),
    weight: Joi.number().required().min(1).precision(2).messages({
      'number.base': 'El campo weight debe ser un número entero',
      'number.min': 'El campo weight debe ser igual o mayor a 1',
      'any.required': 'El campo weight es un campo obligatorio',
    }),
  }),
}

export const UpdateBabyWeightDto = {
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
    weight: Joi.number().required().min(1).precision(2).messages({
      'number.base': 'El campo weight debe ser un número entero',
      'number.min': 'El campo weight debe ser igual o mayor a 1',
      'any.required': 'El campo weight es un campo obligatorio',
    }),
  }),
}

export const DeleteBabyWeightDto = {
  params: Joi.object().keys({
    id: Joi.number().integer().min(1).required().messages({
      'number.base': 'El campo id debe ser un número entero',
      'number.min': 'El campo id debe ser igual o mayor a 1',
      'any.required': 'El campo id es un campo obligatorio',
    })
  }),
}
