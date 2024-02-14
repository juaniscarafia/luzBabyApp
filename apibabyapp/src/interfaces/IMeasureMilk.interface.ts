export interface IMeasureMilk {
  PageSize?: number | null,
  PageNumber?: number | null
}

export interface IInsertMeasureMilk {
  Date: string,
  Time: string,
  Measure: number,
  IdMilk: number
}

export interface IUpdateMeasureMilk {
  Id: number,
  Date: string,
  Time: string,
  Measure: number,
  IdMilk: number
}

export interface IDeleteMeasureMilk {
  Id: number
}
