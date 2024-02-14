export interface IBabyWeightSeek {
  StartDate?: string | null,
  EndDate?: string | null
}

export interface IInsertBabyWeight {
  Date: string,
  Weight: number
}

export interface IUpdateBabyWeight {
  Id: number,
  Date: string,
  Weight: number
}

export interface IDeleteBabyWeight {
  Id: number
}
