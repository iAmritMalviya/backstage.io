import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { Config, ConfigReader } from '@backstage/config';
import { createYAML } from './controllers/handleGithub';
import yaml from 'js-yaml';
import axios from 'axios';
import Joi from 'joi';

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
    response.json({
      status: 'Hey Intverse, Its backend',
      cong: config.getString('app.title'),
    });
  });

  router.post('/', createYAML(baseURL, config));

  router.use(errorHandler());
  return router;
}

export const createGithubHandler = (
  objectData: any,
  gitHubCred: any,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    console.log('inside the create github handler');

    // Checks for all the arguments
    if (
      Object.keys(objectData).length == 0 ||
      Object.keys(gitHubCred).length == 0
    ) {
      reject(new Error('Length of the object should be greater than 0'));
      return;
    }

    const schema = Joi.object({
      apiVersion: Joi.string().required(),
      kind: Joi.string().required(),
      metadata: Joi.object({
        name: Joi.string().required(),
        annotations: Joi.object({
          'kubernetes.io/ingress.class': Joi.string().required(),
        }).unknown(true),
        tps: Joi.number().required(),
        usecase: Joi.string().required(),
      }).unknown(true),
      username: Joi.string().required(),
      credentials: Joi.array().items(Joi.string()).required(),
    }).unknown(true);

    const gitHubSchema = Joi.object({
      email: Joi.string().email().required(),
      repo: Joi.string().required(),
      owner: Joi.string().required(),
      path: Joi.string().required(),
      commit: Joi.string().required(),
      token: Joi.string().required(),
    }).required();

    const validationResult = schema.validate(objectData);
    const gitValidation = gitHubSchema.validate(gitHubCred);

    console.log('validationResult', validationResult);
    console.log('validationResult', gitValidation);

    if (validationResult.error) {
      reject(validationResult.error);
      return;
    }

    if (gitValidation.error) {
      reject(gitValidation.error);
      return;
    }
   
  

    const yamlDoc = yaml.dump(objectData);

    const data = JSON.stringify({
      message: gitHubCred.commit,
      committer: {
        name: gitHubCred.name,
        email: gitHubCred.email,
      },
      content: Buffer.from(yamlDoc).toString('base64'),
    });

    const requestConfig = {
      method: 'put',
      url: `https://api.github.com/repos/${gitHubCred.owner}/${gitHubCred.repo}/contents/${gitHubCred.path}`,
      headers: {
        'Authorization': `Bearer ${gitHubCred.token}`,     
          'Content-Type': 'application/json',
          'accept': 'application/vnd.github+json'
      },
      data: data,
    };

    // const obj = {
    //   requestConfig, 
    //   gitHubCred, 
    //   objectData
    // }

    // resolve(obj)
    // return

    axios(requestConfig)
      .then(response => {
        resolve({
          message: 'File is created in the GitHub',
          link: `https://github.com/${gitHubCred.owner}/${gitHubCred.repo}/blob/main/${gitHubCred.path}`,
        });

        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        reject(
          new Error(
            'Error while uploading, please try again: ' + error.message,
          ),
        );
        console.log(error.message);
      });
  });
};
