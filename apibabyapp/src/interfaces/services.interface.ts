export interface IDataService {
  url: string
  params?: Record<string, any>
  credentials?: ICredential
}
export interface IGeneralResponse<Q> {
  body: Q
  error: boolean
  status: number
}
export interface IDefaultResponse {
  Id: number
  Message: string
}
export type IGenericResponse<T = undefined> = T extends undefined ? IDefaultResponse : T
export type Methods = 'get' | 'post' | 'put' | 'delete' | 'patch'

export interface ICredential {
  'x-access-token': string
  codiusuario: string
}
