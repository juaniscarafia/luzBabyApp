export interface responseBody {
  Id: number
  Message: string
}

export interface responseBodySeekAll {
  Registros: []
  TotalRegistros: number
}

export interface responseBodySeek {
  Registros: []
}

export interface responseInsert {
  Id: number
  Date: string
  Time: string
  Measure: number
  NameMilk: string
}
