const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/', (req: any, res: any) => {
  const posts = prisma.post.findUnique({
    where: { authotId: 1 }
  });
  
  res.send(posts);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});