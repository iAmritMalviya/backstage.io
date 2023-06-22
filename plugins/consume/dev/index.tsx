import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { consumePlugin, ConsumePage } from '../src/plugin';

createDevApp()
  .registerPlugin(consumePlugin)
  .addPage({
    element: <ConsumePage />,
    title: 'Root Page',
    path: '/consume'
  })
  .render();
