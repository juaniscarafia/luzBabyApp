import { type SqlData } from '@interfaces/sqlParams.interface'
import DB from '@config/dataBase/sql'
import config from '@config/config'
import type * as babyWeightInterface from '@interfaces/IBabyWeight.interface'
import { type responseBody, type responseBodySeekAll } from '@interfaces/responseBody.interface'

export const seekAllBabyWeight: any = async (data: babyWeightInterface.IBabyWeightSeek) => {
  try {
    const obj: SqlData = {
      spName: 'SeekALLBabyWeight',
      params: [
        { name: 'StartDate', sqlType: config.SqlTypes.VarChar, value: data.StartDate },
        { name: 'EndDate', sqlType: config.SqlTypes.VarChar, value: data.EndDate }
      ],
    }

    const result = await DB.executeSpRecordsets(obj)

    const response: responseBodySeekAll = {
      Registros: result[0],
      TotalRegistros: result[1][0].Cantidad
    }
    return response
  } catch (error: any) {
    throw error
  }
}

export const insertBabyWeight: any = async (data: babyWeightInterface.IInsertBabyWeight) => {
  try {
    const obj: SqlData = {
      spName: 'InsertBabyWeight',
      params: [
        { name: 'Date', sqlType: config.SqlTypes.VarChar, value: data.Date },
        { name: 'Weight', sqlType: config.SqlTypes.Decimal(10, 2), value: data.Weight }
      ],
    }

    const result = (await DB.executeSPRecordset(obj)) as [{ Id: number }]
    const response: responseBody = {
      Id: result[0].Id,
      Message: 'Weight was inserted correctly',
    }
    return response
  } catch (error) {
    throw error
  }
}

export const editBabyWeight: any = async (data: babyWeightInterface.IUpdateBabyWeight) => {
  try {
    const obj: SqlData = {
      spName: 'EditBabyWeight',
      params: [
        { name: 'Id', sqlType: config.SqlTypes.Int, value: data.Id },
        { name: 'Date', sqlType: config.SqlTypes.VarChar, value: data.Date },
        { name: 'Weight', sqlType: config.SqlTypes.Decimal(10, 2), value: data.Weight }
      ],
    }

    const result = (await DB.executeSPRecordset(obj)) as [{ Id: number }]
    const response: responseBody = {
      Id: result[0].Id,
      Message: 'The Weight was modified correctly',
    }
    return response
  } catch (error) {
    throw error
  }
}

export const deleteBabyWeight: any = async (data: babyWeightInterface.IDeleteBabyWeight) => {
  try {
    const obj: SqlData = {
      spName: 'DeleteBabyWeight',
      params: [
        { name: 'Id', sqlType: config.SqlTypes.Int, value: data.Id },
      ],
    }

    await DB.executeSPRecordset(obj)
    const response: responseBody = {
      Id: data.Id,
      Message: 'The Weight was successfully removed.',
    }
    return response
  } catch (error: any) {
    throw error
  }
}
