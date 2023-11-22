import { z } from 'zod'

require('dotenv').config()

const envVarsSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test']),
  PORT: z
    .preprocess((val) => {
      if (typeof val === 'string') {
        return parseInt(val, 10)
      }
      return val
    }, z.number())
    .default(3000),
})

const envVars = envVarsSchema.parse(process.env)

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
}
