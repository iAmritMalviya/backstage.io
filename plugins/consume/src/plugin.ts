import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const consumePlugin = createPlugin({
  id: 'consume',
  routes: {
    root: rootRouteRef,
  },
});

export const ConsumePage = consumePlugin.provide(
  createRoutableExtension({
    name: 'ConsumePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
