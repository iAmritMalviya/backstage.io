import yaml from 'js-yaml';
import axios from 'axios';


export const createYAML = (baseURL: any, config: any) => async (req: any, res: any) => {
 const githubConfig = config.get('integrations.github') 
 const token = githubConfig[0].token;
 const owner = 'iAmritMalviya';
 const repo = 'demorepo'; 
 
/*
 what things will require to create this:
 
 options,
 
 - config file
 - object to be created in yaml

 

*/

try{
    const { applicationName, tps, useCase } = req.body;

    const apiData = {
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
        credentials: ['companyone-key-auth'],
      };

    const yamlDoc = yaml.dump(apiData)

    const data = JSON.stringify({
        message: 'my commit message',
        committer: {
          name: 'iAmritMalviya',
          email: 'malviyaamrat42@gmail.com'
        },
        content: Buffer.from(yamlDoc).toString('base64')
      });
      
      const config = {
        method: 'put',
        url: `https://api.github.com/repos/${owner}/${repo}/contents/${applicationName}.yaml`,
        headers: {
          'Authorization': `Bearer ${token}`,     
          'Content-Type': 'application/json',
          'accept': 'application/vnd.github+json'
        },
        data: data
      };
      
      axios(config)
        .then(response => {
            res.status(200).json({message: "File is created in the github",
        link: `https://github.com/iAmritMalviya/demorepo/blob/main/${applicationName}.yaml`})

          console.log(JSON.stringify(response.data));
        })
        .catch(error => {
        res.status(400).json({
          message: 'error while uploading, please try again',
          error: error.message});
          console.log(error.message);
        });
    }
    catch(err) {
        res.status(500).json({message: 'internal server error'});
    }
    
}