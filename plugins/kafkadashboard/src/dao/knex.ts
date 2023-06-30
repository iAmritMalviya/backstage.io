import { loadBackendConfig, getRootLogger } from '@backstage/backend-common';

let configDetails: any;

const fetchConfigDetails = () => {
    var instance: any;
    const init = async () => {
        return await loadBackendConfig({ logger: getRootLogger(), argv: process.argv });
    };
    configDetails = {
        getInstance: async () => {
            if (!instance) {
                instance = await init();
            }
            return instance;
        }
    };
};

fetchConfigDetails();
const allConfig = await configDetails.getInstance();

let dbConfig = allConfig?.config?.data?.backend?.database;
console.log("db config knex.js ", dbConfig);



export const knex = require('knex')({
    ...dbConfig, debug: true,
})

console.log({knex})
