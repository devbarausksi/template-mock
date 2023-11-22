import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedExample() {
  await prisma.example.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    },
  })
}

async function main() {
  await prisma.$transaction([
    prisma.example.deleteMany(),
  ])

  await seedExample()
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
