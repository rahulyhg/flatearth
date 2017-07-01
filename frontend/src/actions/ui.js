// @flow
import { WS_CONECTED, WS_DISCONECTED } from './types';

export const wsConnected: () => { type: typeof WS_CONECTED } = () => ({ type: WS_CONECTED });
export const wsDiconnected = () => ({ type: WS_DISCONECTED });
