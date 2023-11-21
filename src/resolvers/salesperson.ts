import { prisma } from '../prisma'
import { type ListParams, type UniqueParams } from '../types'
import { validateListParams } from '../validators/validate-list-params'

export const SalespersonQuery = {
  salespersonById: async (_: any, params: UniqueParams) => {
    return prisma.salesperson.findUnique({
      where: {
        id: params.id,
      },
    })
  },
  salesperson: async (_: any, listParams: ListParams) => {
    const { offset, orderBy, limit } = validateListParams(listParams)

    return prisma.salesperson.findMany({
      skip: offset,
      take: limit,
      orderBy,
    })
  },
}
