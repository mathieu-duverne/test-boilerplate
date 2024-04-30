import request from 'supertest';
import express from 'express';
import routes from './routes';

describe('Routes', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(routes);
  });

  test('GET /queue should return the current queue', async () => {
    const response = await request(app).get('/queue');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  test('POST /enqueue should enqueue an action', async () => {
    const actionName = 'Ada';
    const response = await request(app)
      .post('/enqueue')
      .send({ name: actionName });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Value added to queue' });
  });

  test('POST /enqueue should return an error if name is missing', async () => {
    const response = await request(app)
      .post('/enqueue')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Name is required' });
  });
});