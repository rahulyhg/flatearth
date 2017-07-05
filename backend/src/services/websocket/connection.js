// @flow
import url from 'url';
import userController from './controllers/last_users';
import { safeSend } from './connection.service';

const users = ['Oleg', 'Shakti', 'Shiva', 'Jesus', 'Krishna', 'Budha'];
const message = ['Hare Krishna', 'OM Mani Padme Hum', 'Om Namah Shivaya'];

const __DEV__ = process.env.__DEV__;

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
  wss.broadcast(
    JSON.stringify({
      type: 'ws_users_statuses',
      newStatus: data
    })
  );
};

const connectionMessage = wss => async (ws, req) => {
  const location = url.parse(req.url, true);
  console.log(location);
  if (data) safeSend(data);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  const users = await userController.lastUsers({
    count: 5
  });
  safeSend(ws, { type: 'ws_users_init', users });
  ws.on('message', message => {
    const data = JSON.parse(message);
    if (__DEV__) {
      console.log('received: ', data);
    }
    wss.broadcast(
      JSON.stringify({
        type: 'ws_users_statuses',
        newStatus: {
          user: data.payload.userInfo || 'xxx',
          statusUpdate: data.payload.statusUpdate || 'wwww'
        }
      })
    );
  });
};

export default wss => {
  wss.on('connection', connectionMessage(wss));
  // setInterval(usersNotificationTest(wss), 3500);
};
