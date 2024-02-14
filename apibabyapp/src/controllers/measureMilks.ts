import type * as measureMilkInterface from '@interfaces/IMeasureMilk.interface'
import { type NextFunction, type Request, type Response } from 'express'
import * as measureMilkService from '@services/measureMilks.service'
import { responseSuccess, responseSuccessObject } from '@handlers/response.handler'
import { type responseBody, type responseBodySeekAll } from '@interfaces/responseBody.interface'

export const seekAllMeasureMilks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      pageSize,
      pageNumber
    } = req.query
    const data: measureMilkInterface.IMeasureMilk = {
      PageSize: pageSize ? Number(pageSize) : 10,
      PageNumber: pageNumber ? Number(pageNumber) : 1
    }

    const result: responseBodySeekAll = await measureMilkService.seekAllMeasureMilks(data)

    responseSuccessObject(req, res, result, 200)
  } catch (error) {
    next(error)
  }
}

export const insertMeasureMilks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      date,
      time,
      measure,
      idmilk
    } = req.body

    const data: measureMilkInterface.IInsertMeasureMilk = {
      Date: String(date),
      Time: String(time),
      Measure: Number(measure),
      IdMilk: Number(idmilk)
    }

    const result: responseBody = await measureMilkService.insertMeasureMilks(data)
    responseSuccess(req, res, result, 200)
  } catch (err) {
    next(err)
  }
}

export const editMeasureMilks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      id
    } = req.params

    const {
      date,
      time,
      measure,
      idmilk
    } = req.body

    const data: measureMilkInterface.IUpdateMeasureMilk = {
      Id: Number(id),
      Date: String(date),
      Time: String(time),
      Measure: Number(measure),
      IdMilk: Number(idmilk)
    }

    const result: responseBody = await measureMilkService.editMeasureMilks(data)
    responseSuccess(req, res, result, 200)
  } catch (err) {
    next(err)
  }
}

export const deleteMeasureMilks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params
    const data: measureMilkInterface.IDeleteMeasureMilk = {
      Id: Number(id)
    }
    const result: responseBody = await measureMilkService.deleteMeasureMilks(data)

    responseSuccess(req, res, result, 200)
  } catch (error) {
    next(error)
  }
}
