import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(cors());
app.use(routes);
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'server running' });
});

const port = Number(process.env.PORT || 8080);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});