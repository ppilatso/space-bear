import { PrismaClient } from '@prisma/client'
import { generateId } from '../src/modules/db';

const prisma = new PrismaClient()

async function main() {
  await prisma.post.createMany({
    data: [
      {
        id: generateId(),
        slug: 'ultimate-node-stack',
        title: 'Ultimate Node Stack 2023',
        publishedAt: new Date(),
      },
      {
        id: generateId(),
        slug: 'draft-post',
        title: 'Draft Post',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })