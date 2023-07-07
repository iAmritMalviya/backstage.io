

import { configDetails, fetchConfigDetails } from "./db-connection";
import {Pool} from 'pg';

fetchConfigDetails();
const allConfig = await configDetails.getInstance();

let dbConfig = allConfig?.config?.data?.backend?.database;
console.log("dbConfig", dbConfig);



export const knex = require('knex')({
    ...dbConfig, debug: true,
})


console.log("dbConfig", dbConfig.connection);

const pool = new Pool(dbConfig.connection);
export const client = await pool.connect();