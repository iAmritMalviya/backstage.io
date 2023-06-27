import { errorHandler } from '@backstage/backend-common';
import { createGithubHandler } from '@internal/plugin-consume-backend';
import express from 'express';
import Router from 'express-promise-router';
import { Logger, config, log } from 'winston';
import { Config } from '@backstage/config';
export interface RouterOptions {
  logger: Logger;
  config: Config;
}

export async function createRouter(
  options: RouterOptions,

): Promise<express.Router> {
  const { logger, config } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'amrit is a great software engineer' });
  });


 

  router.post('/', async (req, res) => {
    
    try {
      const { applicationName, tps, useCase } = req.body;
  

    const Object = {
      apiVersion: 'configuration.konghq.com/v1',
      kind: 'KongConsumer',
      metadata: {
        name: applicationName,
        annotations: {
          'kubernetes.io/ingress.class': 'kong',
        },
        tps: tps,
        usecase: useCase,
      },
      username: applicationName,
      credentials: [`${applicationName}-key-auth`],
    };   
    
    
    
    const gitHubCred = {
      owner: 'iAmritMalviya',
      repo: 'demorepo',  
      path: req.body.applicationName+ '.yaml', // add full path
      email: 'malviyaamrat42@gmail.com',
      token: `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`,
      commit: 'A commit message'
    }
    console.log('it came here ');
    // token: `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`,
      
      // Call your reusable function passing the payload and any other required parameters
      const response = await createGithubHandler(Object, gitHubCred);
      
      // Handle the response or send it back to the client
      res.status(200).json(response);
    } catch (error: any) {
      // Handle any errors that occur during the processing
      res.status(500).json({error: error});
    }
 
  });

  router.use(errorHandler());
  return router;
}
