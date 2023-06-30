import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const kafkadashboardPlugin = createPlugin({
  id: 'kafkadashboard',
  routes: {
    root: rootRouteRef,
  },
});

export const KafkadashboardPage = kafkadashboardPlugin.provide(
  createRoutableExtension({
    name: 'KafkadashboardPage',
    component: () =>
      import('./components/KafkaDashboard').then(m => m.KafkaDashboard),
    mountPoint: rootRouteRef,
  }),
);
