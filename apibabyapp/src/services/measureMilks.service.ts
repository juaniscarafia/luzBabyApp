import { type SqlData } from '@interfaces/sqlParams.interface'
import DB from '@config/dataBase/sql'
import config from '@config/config'
import type * as measureMilkInterface from '@interfaces/IMeasureMilk.interface'
import { type responseInsert, type responseBody, type responseBodySeekAll } from '@interfaces/responseBody.interface'

export const seekAllMeasureMilks: any = async (data: measureMilkInterface.IMeasureMilk) => {
  try {
    const obj: SqlData = {
      spName: 'listMeasureMilks',
      params: [
        { name: 'PageSize', sqlType: config.SqlTypes.Int, value: data.PageSize },
        { name: 'PageNumber', sqlType: config.SqlTypes.Int, value: data.PageNumber }
      ],
    }

    const result = await DB.executeSpRecordsets(obj)

    const response: responseBodySeekAll = {
      Registros: JSON.parse(result[0][0].Registros as string),
      TotalRegistros: result[1][0].Cantidad,
    }
    return response
  } catch (error: any) {
    throw error
  }
}

export const insertMeasureMilks: any = async (data: measureMilkInterface.IInsertMeasureMilk) => {
  try {
    const obj: SqlData = {
      spName: 'InsertMeasureMilk',
      params: [
        { name: 'Date', sqlType: config.SqlTypes.VarChar, value: data.Date },
        { name: 'Time', sqlType: config.SqlTypes.VarChar, value: data.Time },
        { name: 'Measure', sqlType: config.SqlTypes.Int, value: data.Measure },
        { name: 'IdMilk', sqlType: config.SqlTypes.Int, value: data.IdMilk }
      ],
    }

    const result = await DB.executeSpRecordsets(obj)

    const response: responseInsert = {
      Id: result[0][0].Id,
      Date: result[0][0].Date,
      Time: result[0][0].Time,
      Measure: result[0][0].Measure,
      NameMilk: result[0][0].NameMilk
    }
    return response
  } catch (error) {
    throw error
  }
}

export const editMeasureMilks: any = async (data: measureMilkInterface.IUpdateMeasureMilk) => {
  try {
    const obj: SqlData = {
      spName: 'EditMeasureMilk',
      params: [
        { name: 'Id', sqlType: config.SqlTypes.Int, value: data.Id },
        { name: 'Date', sqlType: config.SqlTypes.VarChar, value: data.Date },
        { name: 'Time', sqlType: config.SqlTypes.VarChar, value: data.Time },
        { name: 'Measure', sqlType: config.SqlTypes.Int, value: data.Measure },
        { name: 'IdMilk', sqlType: config.SqlTypes.Int, value: data.IdMilk }
      ],
    }

    const result = (await DB.executeSPRecordset(obj)) as [{ Id: number }]
    const response: responseBody = {
      Id: result[0].Id,
      Message: 'The measurement was modified correctly',
    }
    return response
  } catch (error) {
    throw error
  }
}

export const deleteMeasureMilks: any = async (data: measureMilkInterface.IDeleteMeasureMilk) => {
  try {
    const obj: SqlData = {
      spName: 'DeleteMeasureMilk',
      params: [
        { name: 'Id', sqlType: config.SqlTypes.Int, value: data.Id },
      ],
    }

    await DB.executeSPRecordset(obj)
    const response: responseBody = {
      Id: data.Id,
      Message: 'The measure was successfully removed.',
    }
    return response
  } catch (error: any) {
    throw error
  }
}
