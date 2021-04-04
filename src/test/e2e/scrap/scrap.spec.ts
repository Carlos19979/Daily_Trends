
import { Server } from 'http';
import supertest from 'supertest';
import app from '../../../app';
import { HTTP_STATUS } from '../../../app/application/shared/constants/http_codes';

describe('E2E test to scrap Application service', () => {
  let server: Server;

    beforeEach(() => {
        server = app.listen(3000, () => console.log('Listening on port 3000'));
    });

    afterEach(async () => {
        await server.close();
    });
  
  test('Should check if scrap response is correct', async () => {
    supertest(app)
      .post('/daily_trends/scrap').expect(HTTP_STATUS.CREATED);
  });
});
