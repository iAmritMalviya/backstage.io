import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef, MultiFormRouteRef } from './routes';

export const redpandaPlugin = createPlugin({
  id: 'redpanda',
  routes: {
    root: rootRouteRef,
  },
});

// export const MultiFOrmPlugin = createPlugin({
//   id: 'multiform',
//   routes: {
//     root: MultiFormRouteRef,
//   },
// });


export const RedpandaPage = redpandaPlugin.provide(
  createRoutableExtension({
    name: 'RedpandaPage',
    component: () =>
      import('./components/Dashboard').then(m => m.Dashboard),
    mountPoint: rootRouteRef,
  }),
);

export const MultiFormPage = redpandaPlugin.provide(
  createRoutableExtension({
    name: 'MultiFormPage',
    component: () =>
      import('./components/MultiForm').then(m => m.MultiForm),
    mountPoint: MultiFormRouteRef,
  }),
);

