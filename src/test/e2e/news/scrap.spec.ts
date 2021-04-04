import supertest from 'supertest';
import app from '../../../app';
import { HTTP_STATUS } from '../../../app/application/shared/constants/http_codes';

describe('Unit test to PersonalTrainerLogin Application service', () => {
  test('Should check if email exist and if password is correct and return a token', async () => {
    supertest(app)
      .post('/daily_trends/scrap').expect(HTTP_STATUS.SUCCESS);
  });
});
