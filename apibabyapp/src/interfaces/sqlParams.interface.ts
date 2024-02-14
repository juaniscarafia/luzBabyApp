import { type ISqlTypeFactoryWithNoParams, type ISqlTypeWithPrecisionScale } from 'mssql'

export interface SqlParams {
  name: string
  sqlType: ISqlTypeFactoryWithNoParams | ISqlTypeWithPrecisionScale
  value: any
}

export interface SqlData {
  spName: string
  params?: SqlParams[]
}
