# Configure tech radar for beginners

<img src="https://backstage.io/assets/images/lead-74bcfe9ea9a65303b0dbcc7bc2cb6546.png" alt="tech radar image" />

## Introduction

The Tech Radar is a visual representation of the technologies and tools that are currently being used and recommended by X organization. It provides insights into the state of various technologies and their adoption within our projects and a clear understanding of which tech stack to use and which to avoid.

## Quadrants

The Tech Radar is divided into four quadrants:

### Adopt

Technologies in the "Adopt" quadrant are highly recommended and widely adopted within X organization. These technologies have proven to be effective and provide significant value to our projects.

- React
- Node
- Kafka

### Trial

Technologies in the "Trial" quadrant are being evaluated and experimented with. These technologies show promising potential and may be considered for wider adoption if successful trials are conducted.

- Redux
- MongoDB
- Bitbucket

### Assess

Technologies in the "Assess" quadrant are under evaluation and analysis. These technologies are being researched and studied to determine their viability and potential benefits.

- TypeScript
- PostgreSQL
- NextJS

### Hold

Technologies in the "Hold" quadrant are not recommended for new projects. These technologies may be deprecated, have known issues, or are being phased out.

- Javascript
- NuxtJS
- php

## How to Read the Radar

The Tech Radar is a visual representation of the technologies and their current status within our organization. Here's how to interpret the radar:

- Technologies closer to the center are more widely adopted and recommended.
- Technologies further from the center are either under evaluation or not recommended.
- Technologies may move from one quadrant to another based on changes in their adoption or suitability.

## Installation

When you will install bakstage, tech radar will be there by default and it will be using default data which data we need to overwrite by tech radar function.

### To write your onw test cases:
create:


```JSON
// app/src/lib/techradar.json
{
    "title": "Title of your Tech radar",
    "quadrants": [
        {
            "id": "1",
            "name": "Bottom right"
        },
        {
            "id": "2",
            "name": "Bottom left"
        },
        {
            "id": "3",
            "name": "Top left"
        },
        {
            "id": "4",
            "name": "Top right"
        }
    ],
    "rings": [
        {
            "id": "adopt",
            "name": "ADOPT",
            "color": "#93c47d"
        },
        {
            "id": "trial",
            "name": "TRIAL",
            "color": "#93d2c2"
        },
        {
            "id": "assess",
            "name": "ASSESS",
            "color": "#fbdb84"
        },
        {
            "id": "hold",
            "name": "HOLD",
            "color": "#efafa9"
        }
    ],
    "entries": [
        {
            "id": "typescript",
            "title": "Typescript",
            "description": "Long description for Typescript",
            "key": "typescript",
            "url": "#",
            "quadrant": "1",
            "timeline": [
                {
                    "moved": 0,
                    "ringId": "trial",
                    "date": "2022-02-06",
                    "description": "Long description for trial"
                },
                {
                    "moved": 1,
                    "ringId": "adopt",
                    "date": "2022-02-08",
                    "description": "Long description for adopt"
                }
            ]
        },
        ...
    ]
}
```


add: 
```tsx
// /packages/src/lib/techradar.tsx
import {
    TechRadarApi,
    TechRadarLoaderResponse,
  } from '@backstage/plugin-tech-radar';
  
  export class TechRadarConfigure implements TechRadarApi {
    async load(id: string | undefined): Promise<TechRadarLoaderResponse> {
  
      // in case if you have a json file, 
  // const data = require('./techradar.json');

    const data = await fetch(url).then(data => data.json())       
              
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
  
```

```tsx
// app/src/apis.ts
import { TechRadarConfigure } from './lib/techRadar';
import { techRadarApiRef } from '@backstage/plugin-tech-radar';

export const apis: AnyApiFactory[] = [
  /*
  ...
  pre loaded codes 
  */
   createApiFactory(techRadarApiRef, new TechRadarConfigure()),
];
```


## Conclusion

The Tech Radar serves as a guide for technology decision-making within our organization. It helps us stay updated on emerging technologies, make informed choices, and align our projects with the recommended technologies.

For more details, please refer to the full Tech Radar [document](https://github.com/backstage/backstage/tree/master/plugins/tech-radar) or consult with the Tech Radar team.

