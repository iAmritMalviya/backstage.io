
import {
    TechRadarApi,
    TechRadarLoaderResponse,
  } from '@backstage/plugin-tech-radar';
  
  export class TechRadarConfigure implements TechRadarApi {
    async load(id: string | undefined): Promise<TechRadarLoaderResponse> {
      // if needed id prop can be used to fetch the correct data        
    //   const data = await fetch('./../techRadar.json').then(res => res.json());
    const data = require('../techRadar.json');
      console.log('data', data);
              
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
  
