import {
  type IDataService,
  type IGeneralResponse,
  type Methods,
} from '@interfaces/services.interface'

async function callFetch<Q>(metodo: Methods, dataService: IDataService): Promise<any> {
  try {
    const { url, params = {} } = dataService
    let resp
    const options = { method: metodo }
    if (options.method !== 'get') {
      resp = await fetch(url, { ...options, body: JSON.stringify(params) })
    } else {
      resp = await fetch(url, options)
    }
    const parseData = (await resp.json()) as IGeneralResponse<Q>
    if (resp.ok) {
      return { ok: true, data: parseData.body, error: null } satisfies {
        ok: true
        data: Q
        error: null
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw parseData
  } catch (error) {
    const e = error as IGeneralResponse<Q>
    if (e.body) {
      const errorObject = { statusCode: e.status, data: e.body }
      return { ok: false, data: null, error: errorObject } satisfies {
        ok: false
        data: null
        error: typeof errorObject
      }
    }
    return {
      ok: false,
      error: {
        statusCode: (error as { status: number }).status
          ? (error as { status: number }).status
          : 500,
        data: JSON.stringify(error),
      },
      data: null,
    } satisfies { ok: false; data: null; error: { statusCode: number; data: string } }
  }
}
async function get<Q>(dataService: IDataService): Promise<any> {
  return await callFetch<Q>('get', dataService)
}
async function post<Q>(dataService: IDataService): Promise<any> {
  return await callFetch<Q>('post', dataService)
}
async function put<Q>(dataService: IDataService): Promise<any> {
  return await callFetch<Q>('put', dataService)
}
async function patch<Q>(dataService: IDataService): Promise<any> {
  return await callFetch<Q>('patch', dataService)
}
async function remove<Q>(dataService: IDataService): Promise<any> {
  return await callFetch<Q>('delete', dataService)
}
export { get, post, put, patch, remove }
