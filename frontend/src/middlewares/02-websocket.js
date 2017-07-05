// @flow
import type { Middleware } from 'redux';
import { wsConnected, wsDiconnected, wsReceivemessage } from '../actions/ui';

const SOCKET_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
};
const BASE_URL = process.env.REACT_APP_BASE_URL;
const __DEV__ = process.env.REACT_APP___DEV__;

const wsMiddleware: Middleware<*, *> = ({ dispatch, getState }) => next => {
  const WS_ROOT: string = `ws://${BASE_URL}`;
  const websocket: WebSocket = new WebSocket(WS_ROOT);
  if (__DEV__) {
    console.log(websocket);
  }
  websocket.onopen = () => dispatch(wsConnected());
  websocket.onclose = () => dispatch(wsDiconnected());
  websocket.onerror = error => console.error('WS ERROR', error.data);
  websocket.onmessage = (event: MessageEvent) => {
    const action = JSON.parse(event.data);

    // mark meta action came from server
    Object.assign(action, {
      meta: { fromWebsocket: true }
    });

    dispatch(wsReceivemessage(action));
  };

  return (action): void => {
    if (
      websocket.readyState === SOCKET_STATES.OPEN &&
      action.meta &&
      action.meta.websocket
    ) {
      const user = getState().locals.user;
      const cleanAction = {
        ...action,
        payload: { ...action.payload, ...user },
        meta: undefined
      };
      websocket.send(JSON.stringify(cleanAction));
    }

    next(action);
  };
};

export default wsMiddleware;
