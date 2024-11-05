import express, { Express} from 'express';
import hook from './routes/hook';


const app: Express = express();
const port = process.env.PORT||5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`⚡[server]: Server is running at https://localhost:${port}`);
});

app.use('/', hook);