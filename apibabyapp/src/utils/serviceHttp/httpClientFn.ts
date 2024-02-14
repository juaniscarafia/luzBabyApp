import { get, post, put, patch, remove } from './axiosFnService'
import { type IDataService, type IGenericResponse } from '@interfaces/services.interface'

async function getService<Q>(dataService: IDataService): Promise<any> {
  return await get<Q>(dataService)
}
async function postService<Q = undefined>(dataService: IDataService): Promise<any> {
  return await post<IGenericResponse<Q>>(dataService)
}
async function patchService<Q = undefined>(dataService: IDataService): Promise<any> {
  return await patch<IGenericResponse<Q>>(dataService)
}
async function putService<Q = undefined>(dataService: IDataService): Promise<any> {
  return await put<IGenericResponse<Q>>(dataService)
}
async function removeService<Q = undefined>(dataService: IDataService): Promise<any> {
  return await remove<IGenericResponse<Q>>(dataService)
}
export { getService, postService, putService, removeService, patchService }
