import axios, { type AxiosResponse } from 'axios'
import { type IDataService, type IGeneralResponse } from '@interfaces/services.interface'

type Methods = 'get' | 'post' | 'put' | 'delete' | 'patch'

const axiosInstance = axios.create({
  timeout: 10000,
  proxy: false,
})

async function callAxios<Q>(metodo: Methods, dataService: IDataService): Promise<any> {
  const { url, params = {}, credentials = {} } = dataService
  const headers = {
    headers: {
      'Content-Type': 'application/json',

      ...credentials,
    },
  }

  try {
    let expression: AxiosResponse<IGeneralResponse<Q>, { error: boolean }>
    switch (metodo) {
      case 'get':
        expression = await axiosInstance.get(url, headers)
        break

      case 'post':
        expression = await axiosInstance.post(url, params, headers)
        break

      case 'put':
        expression = await axiosInstance.put(url, params, headers)
        break

      case 'patch':
        expression = await axiosInstance.patch(url, params, headers)
        break

      case 'delete':
        expression = await axiosInstance.delete(url, headers)
        break

      default:
        expression = await axiosInstance.get(url, headers)
        break
    }

    const objData = {
      ok: true,
      data: expression.data.body ? expression.data.body : expression.data,
      error: null,
    }
    return objData as { ok: true; data: Q; error: null }
  } catch (error) {
    if (axios.isAxiosError<IGeneralResponse<string>>(error)) {
      let errorObject = { statusCode: 500, data: error.message }

      if (error.response != null) {
        errorObject = {
          statusCode: error.response.status,
          data: error.response.statusText,
        }
      }

      if (error.response?.data) {
        if (error.response.data.body) {
          errorObject = {
            statusCode: error.response.status,
            data: error.response.data.body,
          }
        } else {
          errorObject = {
            statusCode: error.response.status,
            data: JSON.stringify(error.response.data),
          }
        }
      }

      return { ok: false, data: null, error: errorObject } satisfies {
        ok: false
        data: null
        error: typeof errorObject
      }
    }
    return {
      ok: false,
      data: null,
      error: { data: 'Error Generico', statusCode: 500 },
    } satisfies {
      ok: false
      data: null
      error: { data: 'Error Generico'; statusCode: 500 }
    }
  }
}

async function get<Q>(dataService: IDataService): Promise<any> {
  return await callAxios<Q>('get', dataService)
}
async function post<Q>(dataService: IDataService): Promise<any> {
  return await callAxios<Q>('post', dataService)
}
async function put<Q>(dataService: IDataService): Promise<any> {
  return await callAxios<Q>('put', dataService)
}
async function patch<Q>(dataService: IDataService): Promise<any> {
  return await callAxios<Q>('patch', dataService)
}
async function remove<Q>(dataService: IDataService): Promise<any> {
  return await callAxios<Q>('delete', dataService)
}

export { get, post, put, patch, remove }
