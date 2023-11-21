import fs from 'node:fs'
import { resolve } from 'node:path'

export const defs = fs.readFileSync(resolve(__dirname, 'graphql', 'schema.graphql')).toString()

