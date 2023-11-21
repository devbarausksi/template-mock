import { z } from 'zod'

import { type ListParams } from '@/types'

const schema = z.object({
  direction: z.enum(['asc', 'desc']).default('asc'),
  page: z.number().int().min(0).default(0),
  perPage: z.number().int().min(0).max(50).default(10),
  sort: z.string().optional(),
  search: z.string().optional(),
})

export function validateListParams(params: ListParams) {
  const { direction, page, perPage, sort, search } = schema.parse(params)

  return {
    limit: perPage,
    offset: page * perPage,
    orderBy:
      sort && direction
        ? {
            [sort]: direction,
          }
        : undefined,
    search,
  }
}
