import { Server } from 'http';
import supertest from 'supertest';
import app from '../../../app';
import { HTTP_STATUS } from '../../../app/application/shared/constants/http_codes';


describe('E2E test to Create/update new Application service', () => {
  test('Should check if the new is created properly and return a SUCCESS', async () => {
    supertest(app)
      .post('/daily_trends/new').send({
        tittle: 'El coronavirus tiene una nueva cepa',
        description: 'cientificos descubren una nueva cepa mal letal',
        image: 'default.jpg',
        source: 'Alvaro',
        newspaper: 'El pais'
      }).expect(HTTP_STATUS.CREATED)
  });
});

describe('E2E test to scrap Application service', () => { 
  test('Should check if scrap response is CREATED', async () => {
    supertest(app)
      .post('/daily_trends/scrap').expect(HTTP_STATUS.CREATED);
      
  });
});

describe('E2E test to getNews Application service', () => {
  test('Should check if getNews Reponds as SUCCESS', async () => {
    supertest(app)
      .get('/daily_trends/scrap').expect(HTTP_STATUS.SUCCESS);
  });
});


describe('E2E test to delete Application service', () => {
  test('Should check if delete Reponds as SUCCESS', async () => {
    supertest(app)
      .delete('/daily_trends/new/2').expect(HTTP_STATUS.SUCCESS);
  });
});
