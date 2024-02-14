import { type Methods } from '@interfaces/services.interface'

export interface ILogRequest {
  url: string
  metodo: Methods
  dataSend: string
}

export interface ILogRequestUpdate {
  idLog: number
  codiEstado: 1 | 2
  respuesta: string
}
