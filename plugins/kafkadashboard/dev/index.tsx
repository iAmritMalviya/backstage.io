import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { kafkadashboardPlugin, KafkadashboardPage } from '../src/plugin';

createDevApp()
  .registerPlugin(kafkadashboardPlugin)
  .addPage({
    element: <KafkadashboardPage />,
    title: 'Root Page',
    path: '/kafkadashboard'
  })
  .render();
