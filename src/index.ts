import express, { type Express } from 'express';
import { graphqlHTTP } from "express-graphql"
import { defs } from './defs'
import { resolvers } from './resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema';


const app: Express = express();
const port = process.env.PORT || 4000;

const schema = makeExecutableSchema({
  typeDefs: defs,
  resolvers
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});