import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import {SalespersonInput} from "../src/types";

const prisma = new PrismaClient()

async function seedSalesperson(length: number = 100) {
  const data = Array.from({ length }).map((): SalespersonInput => ({
    name: faker.person.fullName(),

  }))

  const salespersons = []

  for (const salesperson of data) {
    const newSalesperson = await prisma.salesperson.create({
      data: salesperson as any,
    })
    salespersons.push(newSalesperson)
  }

  return salespersons
}

async function seedCustomers(length: number = 100) {
  const data = Array.from({ length }).map(() => ({
    document: faker.string.uuid(),
    email: faker.internet.email(),
    is_active: faker.datatype.boolean(),
    name: faker.person.fullName(),
    observation: faker.lorem.paragraph(),
    phone: faker.phone.number(),
  }))

  const customers = []

  for (const customer of data) {
    const newCustomer = await prisma.customer.create({
      data: customer as any,
    })
    customers.push(newCustomer)
  }

  return customers
}

async function seedAddresses(length: number = 100, customer_id: string) {
  const data = Array.from({ length }).map(() => ({
    city: faker.location.city(),
    complement: faker.lorem.words(),
    country: faker.location.country(),
    customer_id,
    is_default: faker.datatype.boolean(),
    neighborhood: faker.location.county(),
    number: faker.string.numeric(),
    state: faker.location.state(),
    street_name: faker.location.street(),
    zip_code: faker.location.zipCode(),
  }))

  await prisma.address.createMany({
    data,
  })
}

async function seedProducts(length: number = 100) {
  const data = Array.from({ length }).map(() => ({
    code: faker.string.uuid(),
    depth: faker.number.float({ max: 1000, min: 0 }),
    height: faker.number.float({ max: 1000, min: 0 }),
    name: faker.lorem.words({ max: 3, min: 1 }),
    unit: faker.helpers.arrayElement(['cm', 'm', 'mm']),
    width: faker.number.float({ max: 1000, min: 0 }),
  }))

  return prisma.product.createMany({
    data,
  })
}

async function seedPricing(length: number = 3, currency_id: string) {
  const data = Array.from({ length }).map(() => ({
    code: faker.string.uuid(),
    currency_id: currency_id,
    is_default: faker.datatype.boolean(),
    name: faker.lorem.words(),
    valid_from: faker.date.past(),
    valid_to: faker.date.future(),
  }))

  await prisma.pricing_table.createMany({
    data,
  })

  return data
}

async function seedCurrency() {
  const data = [
    {
      code: 'BRL',
      name: 'Real',
    },
    {
      code: 'USD',
      name: 'Dollar',
    },
    {
      code: 'EUR',
      name: 'Euro',
    },
    {
      code: 'GBP',
      name: 'Pound',
    },
  ].map(({ code, name }) => ({
    code,
    name,
  }))

  return prisma.currency.createMany({
    data,
  })
}

async function seedPriceItem() {
  const products = await prisma.product.findMany()
  const pricingTable = await prisma.pricing_table.findFirst()

  const data = products.map((product: { id: any }) => ({
    price: faker.number.float({ max: 1000, min: 0 }),
    pricing_table_id: pricingTable!.id,
    product_id: product.id,
  }))

  return prisma.price_item.createMany({
    data,
  })
}

async function seedPaymentMethod() {
  const todayDate = new Date(Date.now())

  const data = [
    {
      created_at: todayDate,
      is_manual: false,
      name: 'Cash payment',
      updated_at: todayDate,
    },
    {
      created_at: todayDate,
      is_manual: true,
      name: 'Invoice',
      updated_at: todayDate,
    },
    {
      created_at: todayDate,
      is_manual: false,
      name: 'Credit Card',
      updated_at: todayDate,
    },
    {
      created_at: todayDate,
      is_manual: false,
      name: 'Bank deposit',
      updated_at: todayDate,
    },
  ]

  await prisma.payment_method.createMany({
    data,
  })

  return data
}
async function seedPaymentForm() {
  const data = [
    {
      description: 'PIX',
      is_active: true,
    },
    {
      description: 'Boleto',
      is_active: true,
    },
  ]

  await prisma.payment_form.createMany({
    data,
  })

  return data
}

async function main() {
  await prisma.$transaction([
    prisma.address.deleteMany(),
    prisma.customer.deleteMany(),
    prisma.product.deleteMany(),
    prisma.pricing_table.deleteMany(),
    prisma.price_item.deleteMany(),
    prisma.payment_method.deleteMany(),
    prisma.payment_form.deleteMany(),
    prisma.salesperson.deleteMany(),
  ])

  await seedSalesperson(10)
  await seedProducts(100)
  // await seedCurrency()
  //
  // const currencies = await prisma.currency.findMany()
  //
  // for (const currency of currencies) {
  //   await seedPricing(20, currency.id)
  // }
  //
  // await seedPriceItem()
  //
  // await seedPaymentMethod()
  // await seedPaymentForm()
  //
  // await seedProducts(100)
  //
  // const customers = await seedCustomers(lenCustomers)
  //
  // for (const customer of customers) {
  //   await seedAddresses(lenAddresses, customer.id)
  // }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
