import config from '@config/config'
/* eslint-disable no-template-curly-in-string */
import { createLogger, format, transports } from 'winston'
import 'moment-timezone'
import moment from 'moment'

export const registerLog = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf(
      (info) =>
        `[${moment().format('YYYY-MM-DD HH:mm:ss')}] [${info.level}] ${String(info.message)}`
    )
  ),
  transports: [
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: `./logs/log-${String(config.Api.NAME)}.log`,
    }),
  ],
})
