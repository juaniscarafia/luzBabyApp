import type * as babyWeightInterface from '@interfaces/IBabyWeight.interface'
import { type NextFunction, type Request, type Response } from 'express'
import * as babyWeightService from '@services/babyWeight.service'
import { responseSuccess } from '@handlers/response.handler'
import { type responseBody, type responseBodySeekAll } from '@interfaces/responseBody.interface'

export const seekAllBabyWeight = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      startdate,
      enddate
    } = req.query
    const data: babyWeightInterface.IBabyWeightSeek = {
      StartDate: startdate ? String(startdate) : null,
      EndDate: enddate ? String(enddate) : null
    }

    const result: responseBodySeekAll = await babyWeightService.seekAllBabyWeight(data)

    responseSuccess(req, res, result, 200)
  } catch (error) {
    next(error)
  }
}

export const insertBabyWeight = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      date,
      weight
    } = req.body

    const data: babyWeightInterface.IInsertBabyWeight = {
      Date: String(date),
      Weight: Number(weight)
    }

    const result: responseBody = await babyWeightService.insertBabyWeight(data)
    responseSuccess(req, res, result, 200)
  } catch (err) {
    next(err)
  }
}

export const editBabyWeight = async (
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
      weight
    } = req.body

    const data: babyWeightInterface.IUpdateBabyWeight = {
      Id: Number(id),
      Date: String(date),
      Weight: Number(weight)
    }

    const result: responseBody = await babyWeightService.editBabyWeight(data)
    responseSuccess(req, res, result, 200)
  } catch (err) {
    next(err)
  }
}

export const deleteBabyWeight = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params
    const data: babyWeightInterface.IDeleteBabyWeight = {
      Id: Number(id)
    }
    const result: responseBody = await babyWeightService.deleteBabyWeight(data)

    responseSuccess(req, res, result, 200)
  } catch (error) {
    next(error)
  }
}
