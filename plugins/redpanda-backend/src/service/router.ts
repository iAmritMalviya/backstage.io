import { errorHandler } from '@backstage/backend-common';
import express, { urlencoded } from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { getData, createTopic } from './controllers';
import { configDetails, fetchConfigDetails } from './dao/db-connection';

import { checkRequired } from './middleware';

export interface RouterOptions {
  logger: Logger;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());
  router.use(express.urlencoded({extended: false}));
  
fetchConfigDetails();
const allConfig = await configDetails?.getInstance();

const dbConfig = allConfig?.config?.data?.backend?.database;

const baseUrl = allConfig?.config?.data?.backend?.baseUrl;

console.log(allConfig?.config?.data?.integrations.github[0].token)

const knex = require('knex')({
  ...dbConfig, debug: true,
})



  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });


  router.get('/', checkRequired, getData(baseUrl))
  router.post('/createtopic', createTopic(baseUrl))

  router.use(errorHandler());
  return router;
}


