import { type SqlData } from '@interfaces/sqlParams.interface'
import DB from '@config/dataBase/sql'
import config from '@config/config'
import type * as babyHeightInterface from '@interfaces/IBabyHeight.interface'
import { type responseBody, type responseBodySeekAll } from '@interfaces/responseBody.interface'

export const seekAllBabyHeight: any = async (data: babyHeightInterface.IBabyHeightSeek) => {
  try {
    const obj: SqlData = {
      spName: 'SeekALLBabyHeight',
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

export const insertBabyHeight: any = async (data: babyHeightInterface.IInsertBabyHeight) => {
  try {
    const obj: SqlData = {
      spName: 'InsertBabyHeight',
      params: [
        { name: 'Date', sqlType: config.SqlTypes.VarChar, value: data.Date },
        { name: 'Height', sqlType: config.SqlTypes.Decimal(10, 2), value: data.Height }
      ],
    }

    const result = (await DB.executeSPRecordset(obj)) as [{ Id: number }]
    const response: responseBody = {
      Id: result[0].Id,
      Message: 'Height was inserted correctly',
    }
    return response
  } catch (error) {
    throw error
  }
}

export const editBabyHeight: any = async (data: babyHeightInterface.IUpdateBabyHeight) => {
  try {
    const obj: SqlData = {
      spName: 'EditBabyHeight',
      params: [
        { name: 'Id', sqlType: config.SqlTypes.Int, value: data.Id },
        { name: 'Date', sqlType: config.SqlTypes.VarChar, value: data.Date },
        { name: 'Height', sqlType: config.SqlTypes.Decimal(10, 2), value: data.Height }
      ],
    }

    const result = (await DB.executeSPRecordset(obj)) as [{ Id: number }]
    const response: responseBody = {
      Id: result[0].Id,
      Message: 'The Height was modified correctly',
    }
    return response
  } catch (error) {
    throw error
  }
}

export const deleteBabyHeight: any = async (data: babyHeightInterface.IDeleteBabyHeight) => {
  try {
    const obj: SqlData = {
      spName: 'DeleteBabyHeight',
      params: [
        { name: 'Id', sqlType: config.SqlTypes.Int, value: data.Id },
      ],
    }

    await DB.executeSPRecordset(obj)
    const response: responseBody = {
      Id: data.Id,
      Message: 'The Height was successfully removed.',
    }
    return response
  } catch (error: any) {
    throw error
  }
}
