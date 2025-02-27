import { StatusCodes } from 'http-status-codes';
import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Healthcheck', () => {
  it('healthcheck', async () => {
    const res = await request.get('/healthcheck');
    expect(res.status).toBe(StatusCodes.OK);
  });
});
