import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { createYAML } from './controllers/handleGithub';

export interface RouterOptions {
  logger: Logger;
}

const baseURL = 'base';

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.post('/health', (req, response) => {
    console.log(req.body);
    
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  router.get('/', (_, response) => {
    response.json({status: "Hey Bhanu, Its backend"});
  })

  router.post('/', createYAML(baseURL));

  router.use(errorHandler());
  return router;
}
