import { ExampleMutation, ExampleQuery } from './example'

export const resolvers = {
  Query: {
    ...ExampleQuery,
  },
  Mutation: {
    ...ExampleMutation,
  },
}
