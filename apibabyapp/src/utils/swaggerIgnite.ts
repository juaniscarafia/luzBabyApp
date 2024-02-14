import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { type Application } from 'express'
import config from '@config/config'

const name = config.Api.NAME ?? 'Api'

function swaggerIgnite(applicationInstance: Application): any {
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: name,
      version: '1.0',
      description: 'ApiBabyApp'
    },
    basePath: '/',
    schemes: ['https', 'http'],
  }
  const options = {
    swaggerDefinition,
    apis: ['./docs/**/*.yaml'],
  }
  const swaggerSpec = swaggerJSDoc(options)
  applicationInstance.use('/api/documentacion', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
export default swaggerIgnite
