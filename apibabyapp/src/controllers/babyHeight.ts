import type * as babyHeightInterface from '@interfaces/IBabyHeight.interface'
import { type NextFunction, type Request, type Response } from 'express'
import * as babyHeightService from '@services/babyHeight.service'
import { responseSuccess } from '@handlers/response.handler'
import { type responseBody, type responseBodySeekAll } from '@interfaces/responseBody.interface'

export const seekAllBabyHeight = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      startdate,
      enddate
    } = req.query
    const data: babyHeightInterface.IBabyHeightSeek = {
      StartDate: startdate ? String(startdate) : null,
      EndDate: enddate ? String(enddate) : null
    }

    const result: responseBodySeekAll = await babyHeightService.seekAllBabyHeight(data)

    responseSuccess(req, res, result, 200)
  } catch (error) {
    next(error)
  }
}

export const insertBabyHeight = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      date,
      height
    } = req.body

    const data: babyHeightInterface.IInsertBabyHeight = {
      Date: String(date),
      Height: Number(height)
    }

    const result: responseBody = await babyHeightService.insertBabyHeight(data)
    responseSuccess(req, res, result, 200)
  } catch (err) {
    next(err)
  }
}

export const editBabyHeight = async (
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
      height
    } = req.body

    const data: babyHeightInterface.IUpdateBabyHeight = {
      Id: Number(id),
      Date: String(date),
      Height: Number(height)
    }

    const result: responseBody = await babyHeightService.editBabyHeight(data)
    responseSuccess(req, res, result, 200)
  } catch (err) {
    next(err)
  }
}

export const deleteBabyHeight = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params
    const data: babyHeightInterface.IDeleteBabyHeight = {
      Id: Number(id)
    }
    const result: responseBody = await babyHeightService.deleteBabyHeight(data)

    responseSuccess(req, res, result, 200)
  } catch (error) {
    next(error)
  }
}
