

import {knex, client} from '../dao/knex';

const getData = (baseURL: any) => async (req: any, res: any) => { 

    res.json({middleware: req.uid})

    // knex.select().from('users')
    // .then(rows => {
    //   res.status(200).json({rows})
    // })
    // .catch(error => {
    //     res.status(500).json({message :error.message})
    // })
 
    
}

const createTopic = (baseUrl:any) => async (req, res) =>  {

    const data = await client.query('SELECT * FROM users');
    res.json({data: data})    
}

export {getData, createTopic}