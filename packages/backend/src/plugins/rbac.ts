import {createRouter} from '@spotify/backstage-plugin-rbac-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';

export default function createPlugin(env: PluginEnvironment): Promise<Router> {
    return createRouter(env);
}