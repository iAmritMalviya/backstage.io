import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { Octokit, App } from 'octokit';

// export const createYAML = (baseURL: any) => async (req: any, res: any) => {

//     const { applicationName, tps, useCase } = req.body;

//     const apiData = {
//         apiVersion: 'configuration.konghq.com/v1',
//         kind: 'KongConsumer',
//         metadata: {
//           name: applicationName,
//           annotations: {
//             'kubernetes.io/ingress.class': 'kong',
//           },
//           tps: tps,
//           usecase: useCase,
//         },
//         username: applicationName,
//         credentials: ['companyone-key-auth'],
//       };

//     try {
//     const yamlDoc = yaml.dump(apiData)
//     const fileContent = fs.readFileSync('./kong-amrit.yaml', 'utf8');
//     const filePath = `${applicationName}.yaml`
//     console.log(fileContent, filePath);

//     // const url = `https://github.com/nagacodes/kongworkspace/tree/kong-cluster/kong-configs/5.kong-consumers/${path}`

//     const gitURL = `https://api.github.com/repos/iAmritMalviya/demorepo/contents/${filePath}`;

//     const response = await axios.put(gitURL,
//         {
//             message: `${applicationName} added`,
//             content: Buffer.from(fileContent).toString('base64'),
//             branch: 'main',
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/vnd.github+json'
//             },
//         }
//         );
//         console.log('YAML file created successfully:', response.data);

//     } catch (error: any) {
//         console.log(error.message);
//     }

// }

// export const createYAML = (baseURL: any) => async (req: any, res: any) => {
//   // Octokit.js
//   // https://github.com/octokit/core.js#readme

//   const fileContent = fs.readFileSync('./kong-amrit.yaml', 'utf8');

//   const octokit = new Octokit({
//     auth: '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',
//   });

//   await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
//     owner: 'iAmritMalviya',
//     repo: 'demorepo',
//     path: 'amrit.yaml',
//     message: 'my commit message',
//     committer: {
//       name: 'iAmritMalviya',
//       email: 'malviyaamrat42@gmail.com',
//     },
//     content: Buffer.from(fileContent).toString('base64'),
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28',
//       'Content-Type': 'application/json',
//       'Accept': 'application/vnd.github+json',
//     },
//   });
// };

const pathX = path.resolve('./kong-amrit.yaml')

// export const createYAML = (baseURL: any) => async (req: any, res: any) => {

//     const fileContent = fs.readFileSync('./kong-amrit.yaml', 'utf8');
//     const data = JSON.stringify({
//         message: 'my commit message',
//         committer: {
//           name: 'iAmritMalviya',
//           email: 'malviyaamrat42@gmail.com'
//         },
//         content: Buffer.from(fileContent).toString('base64')
//       });
      
//       const config = {
//         method: 'put',
//         url: 'https://api.github.com/repos/iAmritMalviya/demorepo/contents/hello.yaml',
//         headers: {
//           'Authorization': 'Bearer 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',
//         //   'Authorization': 'Bearer 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',
//           'Content-Type': 'application/json',
//           'accept': 'application/vnd.github+json'
//         },
//         data: data
//       };
      
//       axios(config)
//         .then(response => {
//           console.log(JSON.stringify(response.data));
//         })
//         .catch(error => {
//           console.log(error.message);
//         });
      
//     res.json({status: "working"})
// }

// export const createYAML = (baseURL: any) => async (req: any, res: any) => {
//     console.log(pathX)
//     try {
//         const owner = 'iAmritMalviya';
//         const repo = 'demorepo';
//         const filePath = pathX; // Path where you want to create the file
//         const token = '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'; // Personal Access Token with appropriate permissions
    
//         const fileContent = 'This is the content of the file'; // Content of the file
    
//         const response = await axios.put(
//           `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
//           {
//             message: 'Create file via API',
//             content: Buffer.from(fileContent).toString('base64'),
//           },
//           {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json',
//               'Accept': 'application/vnd.github+json',
//             },
//           }
//         );
    
//         res.json('File created successfully:', response.data);
    
//       } catch (error: any) {
//         res.json('Error creating file:', error.message);
//       }
   
// }










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
          'Authorization': 'Bearer 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',
        //   'Authorization': 'Bearer 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',
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
        res.status(400).json({message: 'error while uploading',
                                error: error.message});

          console.log(error.message);
        });
    }
    catch(err) {
        res.status(500).json({message: 'internal server error'});
    }
    
}