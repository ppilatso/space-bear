import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data:{
  //     name: 'Phenyo',
  //     email: 'pilatsophenyo@gmail.com',
  //     posts: {
  //       create: {
  //         title: 'Hello World'
  //       }
  //     }
  //   }
  // })
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true
    }
  });
  console.log(allUsers, { depth: null });
}

main().then( async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
})
