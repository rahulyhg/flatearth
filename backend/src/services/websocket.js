// @flow
import type { Koa } from 'koa';

import WebSocket from 'ws';
import onConnection from './websocket/connection';

export default (server: Koa) => {
  const wss = new WebSocket.Server({ server });
  wss.broadcast = data => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  };
  onConnection(wss);
};
