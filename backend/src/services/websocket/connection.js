// @flow
import url from 'url';
import userController from './controllers/last_users';
import { safeSend } from './connection.service';



const __DEV__ = process.env.__DEV__;

const connectionMessage = wss => async (ws, req) => {
  if (__DEV__) {
    const location = url.parse(req.url, true);
    console.log(location);
    // You might use location.query.access_token to authenticate or share sessions
    // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  }
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
