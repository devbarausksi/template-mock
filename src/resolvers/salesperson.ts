import prisma from '../database'
import { type ListParams, type UniqueParams } from '../types'
import { listParamsValidation } from '../validations/list-params.validation'

export const SalespersonQuery = {
  salespersonById: async (_: any, params: UniqueParams) => {
    const item = await prisma.salesperson.findUnique({
      where: {
        id: params.id,
      },
    })

    return item
  },
  salesperson: async (_: any, listParams: ListParams) => {
    const { offset, orderBy, limit } = listParamsValidation(listParams)

    return prisma.salesperson.findMany({
      skip: offset,
      take: limit,
      orderBy,
    })
  },
}
