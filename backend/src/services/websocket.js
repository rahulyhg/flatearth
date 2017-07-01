// @flow
import type { Koa } from 'koa';

import WebSocket from 'ws';
import onConnection from './websocket/connection';

export default (server: Koa) => {
  const wss = new WebSocket.Server({ server });
  onConnection(wss);
};
