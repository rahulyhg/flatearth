// @flow
import type { Middleware } from 'redux';
import {
  wsConnected,
  wsDiconnected,
  // wsUsersState,
  // wsNewUser,
  wsReceivemessage,
  wsSendmessage
} from '../actions/ui';

const SOCKET_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
};
const BASE_URL = process.env.REACT_APP_BASE_URL;

const wsMiddleware: Middleware<*, *> = ({ dispatch }) => next => {
  const WS_ROOT: string = `ws://${BASE_URL}`;
  console.log(process.env);
  const websocket: WebSocket = new WebSocket(WS_ROOT);
  console.log(websocket);
  websocket.onopen = () => dispatch(wsConnected());
  websocket.onclose = () => dispatch(wsDiconnected());
  websocket.onerror = error => console.error('WS ERROR', error.data);
  websocket.onmessage = (event: MessageEvent) => {
    const action = JSON.parse(event.data);
    // console.log(action);
    Object.assign(action, { meta: { fromWebsocket: true } });
    if (process.env.__DEV__ && action.type === 'TEST') {
    }
    dispatch(wsReceivemessage(action));
  };

  return (action): void => {
    if (websocket.readyState === SOCKET_STATES.OPEN && action.meta && action.meta.websocket) {
      const cleanAction = { ...action, meta: undefined };
      websocket.send(wsSendmessage(cleanAction));
    }

    next(action);
  };
};

export default wsMiddleware;
