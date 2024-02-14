export interface GetResponseReturn<Q> {
  ok: boolean
  data: IData<Q> | null
  error: IError | null
}

export interface IObjectData<Q> {
  data: IData<Q> | null
  status: boolean
  error: IError | null
}

export interface IData<Q> {
  body: Q
  error: boolean | null
  status: number
}

export interface IError {
  statusCode: number | undefined
  data: string
}

function getResponse<Q>(objData: IObjectData<Q>): GetResponseReturn<Q> {
  const { status, data, error } = objData

  return {
    ok: status,
    data: data ?? null,
    error: error ?? null,
  }
}

export { getResponse }
