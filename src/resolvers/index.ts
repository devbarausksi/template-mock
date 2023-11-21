import { OrderMutation, OrderQuery } from './order'
import { SalespersonQuery } from './salesperson'

export const resolvers = {
  Query: {
    ...OrderQuery,
    ...SalespersonQuery,
  },
  Mutation: {
    ...OrderMutation,
  },
}
