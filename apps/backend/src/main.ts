import express, { Request, Response } from 'express';
import router from './routes/routes';


const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();


app.use('/', router);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
