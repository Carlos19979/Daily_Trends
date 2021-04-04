import { Server } from 'http';
import supertest from 'supertest';
import app from '../../../app';
import { HTTP_STATUS } from '../../../app/application/shared/constants/http_codes';
const express = require('express');


describe('Unit test to createNew Application service', () => {
  test('Should check if the new is created properly and return a SUCCESS', async () => {
    supertest(app)
      .post('/daily_trends/createNew').send({
        tittle: 'El coronavirus tiene una nueva cepa',
        description: 'cientificos descubren una nueva cepa mal letal',
        image: 'default.jpg',
        source: 'Alvaro',
        newspaper: 'El pais'
      }).expect(HTTP_STATUS.CREATED)
  });
});
