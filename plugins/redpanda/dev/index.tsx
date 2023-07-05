import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { redpandaPlugin, RedpandaPage } from '../src/plugin';

createDevApp()
  .registerPlugin(redpandaPlugin)
  .addPage({
    element: <RedpandaPage />,
    title: 'Root Page',
    path: '/redpanda'
  })
  .render();
