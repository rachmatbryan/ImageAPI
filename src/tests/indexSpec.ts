import app from '../app';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('Gets / endpoint', async () => {
    const response = await request.get(
      '/?filename=encenadaport&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
});
