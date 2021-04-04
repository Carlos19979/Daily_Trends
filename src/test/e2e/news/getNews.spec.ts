import { Server } from 'http';
import supertest from 'supertest';
import app from '../../../app';
import { HTTP_STATUS } from '../../../app/application/shared/constants/http_codes';
const express = require('express');

describe('Unit test to getNews Application service', () => {
  test('Should check if getNews Reponds as SUCCESS', async () => {
    supertest(app)
      .get('/daily_trends/scrap').expect(HTTP_STATUS.SUCCESS);
  });
});
