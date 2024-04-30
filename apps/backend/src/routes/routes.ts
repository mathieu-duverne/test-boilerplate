import express, { Response, Request } from 'express';
import { ActionController } from '../controller/ActionController';
import { QueueController } from '../controller/QueueController';
import cors from 'cors';

const actionController = ActionController.getInstance();
const queueController = new QueueController(actionController);

const routes = express.Router();

routes.use(cors());
routes.use(express.json());

routes.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello API' });
});

routes.get('/actions', (req: Request, res: Response) => {
  res.json(actionController.getActions());
});

routes.get('/queue', (req: Request, res: Response) => {
  res.json(queueController.queue.getQueue());
});

routes.post('/enqueue', (req: Request, res: Response) => {
  const { name } = req.body;

  if (name) {
    queueController.enqueueAction(name);
    res.json({ message: 'Value added to queue' });
  } else {
    res.status(400).json({ message: 'Name is required' });
  }
});

export default routes;