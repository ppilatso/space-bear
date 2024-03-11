import express, {NextFunction, Request, Response } from 'express';
import routes from './routes/routes';
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(cors());
app.use(routes);

app.get('/', (req: Request, res: Response) => {  
  res.send({ status: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});