import { Router, type Request, type Response } from 'express'
import { readdirSync } from 'fs'
const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string): any => {
  const file = fileName.split('.').shift()
  return file
}

router.get('', (_req: Request, res: Response) => {
  res.send('Api BabyApp!')
})

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName)

  if (cleanName !== 'index') {
    void import(`./${String(cleanName)}`).then((moduleRouter) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      router.use(`/api/${String(cleanName)}`, moduleRouter.router)
    })
  }
  return null
})

export { router }
