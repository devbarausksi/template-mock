import express from 'express'

import grahqlRoute from './graphql.route'
import restRoute from './rest.route'

const router = express.Router()

const defaultRoutes = [
  {
    path: '',
    route: grahqlRoute,
  },
  {
    path: '/v1',
    route: restRoute,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
