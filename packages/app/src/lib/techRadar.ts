
import {
    TechRadarApi,
    TechRadarLoaderResponse,
  } from '@backstage/plugin-tech-radar';
  
  export class TechRadarConfigure implements TechRadarApi {
    async load(id: string | undefined): Promise<TechRadarLoaderResponse> {
  
      // in case if you have a json file, 
  // const data = require('../techRadar.json');

    const data = await fetch('https://raw.githubusercontent.com/iAmritMalviya/backstage.io/master/packages/app/src/techRadar.json').then(data => data.json())        
              
      // For example, this converts the timeline dates into date objects
      return {
        ...data,
        entries: data.entries.map((entry: { timeline: any[]; }) => ({
          ...entry,
          timeline: entry.timeline.map(timeline => ({
            ...timeline,
            date: new Date(timeline.date),
          })),
        })),
      };
    }
  }
  
