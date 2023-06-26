import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { Config, ConfigReader } from '@backstage/config';
import { createYAML } from './controllers/handleGithub';

export interface RouterOptions {
  logger: Logger;
  config: Config;
}
const baseURL = 'base';

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, config } = options;

  
  
  const router = Router();
  router.use(express.json());

  router.post('/health', (req, response) => {
    console.log(req.body);
    
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  router.get('/', (_, response) => {
    logger.info('PONG!');   
    response.json({status: "Hey Intverse, Its backend",
  cong: config.getString('app.title')});
  })

  router.post('/', createYAML(baseURL, config));

  router.use(errorHandler());
  return router;
}
