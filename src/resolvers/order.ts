import { prisma } from '../prisma'
import {
  type InputParams,
  type ListParams,
  type OrderInput,
  type UniqueParams,
} from '../types'
import { validateListParams } from '../validators/validate-list-params'

export const OrderQuery = {
  orderById: async (_: any, params: UniqueParams) => {
    return prisma.order.findUnique({
      where: {
        id: params.id,
      },
    })
  },
  orders: async (_: any, listParams: ListParams) => {
    const { offset, orderBy, limit } = validateListParams(listParams)

    return prisma.order.findMany({
      skip: offset,
      take: limit,
      orderBy,
    })
  },
}

export const OrderMutation = {
  saveOrder: async (_: any, { input }: InputParams<OrderInput>) => {
    return prisma.order.create({
      data: {
        ...input,
        salesperson: {
          connect: {
            id: input.salespersonId,
          },
        },
      },
    })
  },
}
