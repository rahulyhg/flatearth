// @flow
import Koa from 'koa';
import fs from 'fs';
import WebSocket from 'ws';
import http from 'http';
import url from 'url';
import { join } from 'path';
import { HOST, PORT } from 'config';
import mount from 'koa-mount';
import database from './libs/mongoose';
import APIModules from './modules/API-modules';

database();

const app = new Koa();
const middlewares = fs
  .readdirSync(join(__dirname, './middlewares'))
  .sort();

middlewares.forEach(middleware => {
  // eslint-disable-next-line
  app.use(require(`./middlewares/${middleware}`).default);
});

app.use(mount('/api/v1', APIModules));

const server = http.createServer(app.callback());
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws, ctx) => {
  const location = url.parse(ctx.req.url, true);
  console.log(location);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', message => {
    console.log('received: %s', message);
  });

  ws.send('something');
});
app.listen(PORT, err => {
  if (err) throw new Error(err);
  console.log('server running at %s:%s', HOST, PORT);
});
