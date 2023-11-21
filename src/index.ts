import { makeExecutableSchema } from '@graphql-tools/schema'
import express, { type Express } from 'express'
import { graphqlHTTP } from 'express-graphql'
import morgan from 'morgan'

import { defs } from './defs'
import { resolvers } from './resolvers'

const app: Express = express()
const port = process.env.PORT || 4000

const schema = makeExecutableSchema({
  typeDefs: defs,
  resolvers,
})

app.use(
  '/graphql',
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  }),
)

app.use(morgan('dev'))

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}/graphql`,
  )
})
