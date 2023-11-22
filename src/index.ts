import { type Server } from 'http'

import app from './app'
import config from './config'
import logger from './config/logger'
import prisma from './database'

let server: Server
prisma.$connect().then(() => {
  logger.info('🦺: Database is connected')
  server = app.listen(config.port, () => {
    logger.info(`👔: Server is running at http://localhost:${config.port}`)
  })
})

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error: unknown) => {
  logger.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  logger.info('SIGTERM received')
  if (server) {
    server.close()
  }
})
