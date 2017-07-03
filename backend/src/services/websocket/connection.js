// @flow
import url from 'url';
import userController from './controllers/last_users';
import { safeSend } from './connection.service';

const users = ['Oleg', 'Shakti', 'Shiva', 'Jesus', 'Krishna', 'Budha'];
const message = ['Hare Krishna', 'OM Mani Padme Hum', 'Om Namah Shivaya'];

let data;
let counter = 0;
const usersNotificationTest = wss => () => {
  counter++;
  data = {
    id: counter,
    name: users[Math.floor(Math.random() * users.length)],
    country: 'MiddleEarth',
    statusMessage: message[Math.floor(Math.random() * message.length)]
  };
  wss.broadcast(JSON.stringify({ type: 'ws_users_statuses', newStatus: data }));
};

const connectionMessage = async (ws, req) => {
  const location = url.parse(req.url, true);
  console.log(location);
  if (data) safeSend(data);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  const users = await userController.lastUsers();
  safeSend(ws, { type: 'ws_users_init', users });
  ws.on('message', message => {
    console.log('received: %s', message);
    ws.send('something');
  });
};

export default wss => {
  wss.on('connection', connectionMessage);
  setInterval(usersNotificationTest(wss), 25000);
};
