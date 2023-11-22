import cors from 'cors'
import express, { type Express } from 'express'

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

// import { makeExecutableSchema } from '@graphql-tools/schema'
// import cors from 'cors'
// import express, { type Express } from 'express'
// import { graphqlHTTP } from 'express-graphql'
// import morgan from 'morgan'
//
// import { defs } from './defs'
// import { resolvers } from './resolvers'
//
// const app: Express = express()
// const port = process.env.PORT || 4000
//
// const schema = makeExecutableSchema({
//   typeDefs: defs,
//   resolvers,
// })
//
// app.use(
//   '/graphql',
//   // eslint-disable-next-line @typescript-eslint/no-misused-promises
//   graphqlHTTP({
//     schema,
//   }),
// )
//
// app.get('/graphiql', (req, res) => {
//   res.send(`
//   <div id="sandbox" style="position:absolute;top:0;right:0;bottom:0;left:0"></div>
//   <script src="https://embeddable-sandbox.cdn.apollographql.com/_latest/embeddable-sandbox.umd.production.min.js"></script>
//   <script>
//    new window.EmbeddedSandbox({
//      target: "#sandbox",
//      // Pass through your server href if you are embedding on an endpoint.
//      // Otherwise, you can pass whatever endpoint you want Sandbox to start up with here.
//      initialEndpoint: '/graphql',
//    });
//    // advanced options: https://www.apollographql.com/docs/studio/explorer/sandbox#embedding-sandbox
//   </script>
//   `)
// })
//
// app.use(morgan('dev'))
// app.use(cors())
//
// app.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.log(
//     `⚡️[server]: Server is running at http://localhost:${port}/graphiql`,
//   )
// })

export default app
