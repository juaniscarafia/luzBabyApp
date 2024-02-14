import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import 'module-alias/register'
import { router } from '@routes/index'
import DB from '@config/dataBase/sql'
import { errorHandle } from '@handlers/error.handler'
import swaggerIgnite from '@utils/swaggerIgnite'
const PORT = process.env.API_PORT ?? 3099
const app = express()

app.use(
  cors({
    origin: '*',
  })
)
app.use(express.json())
app.use(router)
app.use(errorHandle)
swaggerIgnite(app)

void DB.connect().then(() =>
  app.listen(PORT, () => {
    console.log(`App escuchando en puerto ${PORT}`)
  })
)

export default app
