export interface IBabyHeightSeek {
  StartDate?: string | null,
  EndDate?: string | null
}

export interface IInsertBabyHeight {
  Date: string,
  Height: number
}

export interface IUpdateBabyHeight {
  Id: number,
  Date: string,
  Height: number
}

export interface IDeleteBabyHeight {
  Id: number
}
