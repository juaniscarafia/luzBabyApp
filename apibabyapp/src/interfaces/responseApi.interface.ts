export interface ResponseApi {
  error: boolean
  status: number
  body: string | [] | object
}

export interface ResponseApiObject {
  error: boolean
  status: number
  body: object
}
