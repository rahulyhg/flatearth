// @flow
import Koa from 'koa';
import fs from 'fs';
import http from 'http';
import { join } from 'path';
import { HOST, PORT } from 'config';
import mount from 'koa-mount';

import database from './libs/mongoose';
import APIModules from './modules/API-modules';
import webSocket from './services/websocket';

database();

const app = new Koa();
const middlewares = fs.readdirSync(join(__dirname, './middlewares')).sort();

middlewares.forEach(middleware => {
  // eslint-disable-next-line
  app.use(require(`./middlewares/${middleware}`).default);
});

app.use(mount('/api/v1', APIModules));

const server = http.createServer(app.callback());

webSocket(server);
server.listen(PORT, err => {
  if (err) throw new Error(err);
  console.log('server running at %s:%s', HOST, PORT);
});
