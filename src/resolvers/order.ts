import prisma from '../database'
import { type ListParams, type UniqueParams } from '../types'
import { listParamsValidation } from '../validations/list-params.validation'

export const OrderQuery = {
  orderById: async (_: any, params: UniqueParams) => {
    return prisma.order.findUnique({
      where: {
        id: params.id,
      },
    })
  },
  orders: async (_: any, listParams: ListParams) => {
    const { offset, orderBy, limit } = listParamsValidation(listParams)

    return prisma.order.findMany({
      skip: offset,
      take: limit,
      orderBy,
    })
  },
}

export const OrderMutation = {
  // saveOrder: async (_: any, { input }: InputParams<OrderInput>) => {
  //   return prisma.order.create({
  //     data: {
  //       ...input,
  //       salesperson: {
  //         connect: {
  //           id: input.salespersonId,
  //         },
  //       },
  //     },
  //   })
  // },
}
