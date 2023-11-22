import fs from 'node:fs'
import { resolve } from 'node:path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import express from 'express'
import { createHandler } from 'graphql-http/lib/use/express'

import { resolvers } from '../resolvers'

export const typeDefs = fs
  .readFileSync(resolve(__dirname, '..', '..', 'graphql', 'schema.graphql'))
  .toString()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const router = express.Router()

router.use(
  '/graphql',
  createHandler({
    schema,
  }),
)
router.get('/graphiql', (req, res) => {
  res.send(`
  <div id="sandbox" style="position:absolute;top:0;right:0;bottom:0;left:0"></div>
  <script src="https://embeddable-sandbox.cdn.apollographql.com/_latest/embeddable-sandbox.umd.production.min.js"></script>
  <script>
   new window.EmbeddedSandbox({
     target: "#sandbox",
     // Pass through your server href if you are embedding on an endpoint.
     // Otherwise, you can pass whatever endpoint you want Sandbox to start up with here.
     initialEndpoint: '/graphql',
   });
   // advanced options: https://www.apollographql.com/docs/studio/explorer/sandbox#embedding-sandbox
  </script>
  `)
})

export default router
