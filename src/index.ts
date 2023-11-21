import express, { type Express } from 'express';
import { graphqlHTTP } from "express-graphql"
import { defs } from './defs'
import { resolvers } from './resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema';
import morgan from 'morgan';

const app: Express = express();
const port = process.env.PORT || 4000;

const schema = makeExecutableSchema({
  typeDefs: defs,
  resolvers,
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: {
      headerEditorEnabled: true,
    },
    pretty: true
  })
)

app.use(morgan('dev'))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}/graphql`);
});