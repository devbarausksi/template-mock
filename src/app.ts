import cors from 'cors'
import express from 'express'

import config from './config'
import morgan from './config/morgan'
import routes from './routes'

const app = express()

if (config.env !== 'test') {
  app.use(morgan.successHandler)
  app.use(morgan.errorHandler)
}

// parse json request body
app.use(express.json())

// enable cors
app.use(cors())
app.options('*', cors())

// routes
app.use('', routes)

export default app
