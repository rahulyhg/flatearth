// @flow
import sockjs from 'sockjs';
import http from 'http';
import type { Koa } from 'koa';

const options = { sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' };
const sockjsEcho = sockjs.createServer(options);

sockjsEcho.on('connection', conn => {
  conn.on('data', message => {
    conn.write(message);
  });
});

export default (app: Koa) => {
  const server = http.createServer(app.callback());
  sockjsEcho.installHandlers(server, {
    prefix: '/ws'
  });
};
