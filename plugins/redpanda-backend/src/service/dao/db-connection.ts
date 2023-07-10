import { loadBackendConfig, getRootLogger } from '@backstage/backend-common';
import { Pool } from 'pg'

export let configDetails: any;

export const fetchConfigDetails = () => {
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

