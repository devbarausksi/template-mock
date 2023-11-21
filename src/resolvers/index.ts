import {PrismaClient} from "@prisma/client"
import {InputParams, ListParams, OrderInput, ProductInput, UniqueParams} from "@/types"
import {z} from "zod";


const prisma = new PrismaClient()

const paramsSchema = z.object({
  direction: z.enum(['asc', 'desc']).default('asc'),
  page: z.number().int().min(0).default(0),
  perPage: z.number().int().min(0).max(50).default(10),
  sort: z.string().optional(),
  search: z.string().optional()
})

function handleParams(params: ListParams){
  const {
    direction, page, perPage, sort, search
  } =   paramsSchema.parse(params)


  return {
    limit: perPage,
    offset: page * perPage,
    orderBy: sort && direction ? {
      [sort]: direction
    } : undefined,
    search
  }
}

export const resolvers = {
    Query: {
      orderById: async (_: any, params: UniqueParams) => {
        return prisma.order.findUnique({
          where: {
            id: params.id
          }
        })
      },
      orders: async (_: any, listParams: ListParams) => {
        const {
          offset, orderBy, limit, search
        } = handleParams(listParams)

        return prisma.order.findMany({
          skip: offset,
          take: limit,
          orderBy
        })
      },
      products: async (_: any, listParams: ListParams) => {
        const {
          offset, orderBy, limit, search
        } = handleParams(listParams)

        return prisma.product.findMany({
          skip: offset,
          take: limit,
          orderBy,
          where: {
            name: {
              search
            }
          }
        })
      },
      productById: async (_: any, params: UniqueParams ) => {
        return prisma.product.findUnique({
          where: {
            id: params.id
          }
        })
      }
    },
  Mutation: {
      saveProduct: async (_: any, {input}: InputParams<ProductInput>) => {
        return prisma.product.create({
          data: input
        })
      },
      saveOrder: async (_: any, {input}: InputParams<OrderInput>) => {
        return prisma.order.create({
          data: {
            ...input,
            salesperson: {
              connect: {
                id: input.salespersonId
              }
            }
          }
        })
      }
  }
}