import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data:{
      name: 'Phenyo',
      email: '',
      posts: {
        create: [{
          title: 'Hello World'
        }, 
        {
          title: 'Hello World 2'
        },
        {
          title: 'Hello World 3'
        
        }]
      }
    }
  });
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
