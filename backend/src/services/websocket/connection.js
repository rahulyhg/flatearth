// @flow
import url from 'url';
import lastUsers from './controllers/last_users';
import { safeSend } from './connection.service';

const connectionMessage = (ws, req) => {
  const location = url.parse(req.url, true);
  console.log(location);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  ws.on('message', message => {
    safeSend(ws, lastUsers());
    console.log('received: %s', message);
    ws.send('something');
  });
};

export default wss => {
  wss.on('connection', connectionMessage);
};
