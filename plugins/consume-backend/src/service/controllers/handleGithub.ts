import yaml from 'js-yaml';
import axios from 'axios';


export const createYAML = (baseURL: any) => async (req: any, res: any) => {

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

    // const fileContent = fs.readFileSync('./kong-amrit.yaml', 'utf8');
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
        url: `https://api.github.com/repos/iAmritMalviya/demorepo/contents/${applicationName}.yaml`,
        headers: {
          'Authorization': 'Bearer Tokan',     
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