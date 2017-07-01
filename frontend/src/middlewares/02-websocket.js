// @flow
import type { Dispatch } from 'redux';
import { wsConnected, wsDiconnected } from '../actions/ui';


const SOCKET_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
};
type SOCKET_STATESType = $Keys<typeof SOCKET_STATES>;

const wsMiddleware = ({ dispatch, getState }: { dispatch: Dispatch<*>, getState: any }) => next => {
  const WS_ROOT: string = process.env.WS_ROOT || process.env.WS_ROOT || 'ws://localhost:3001';
  const websocket: WebSocket = new WebSocket(WS_ROOT);
  websocket.onopen = () => dispatch(wsConnected());
  websocket.onclose = () => dispatch(wsDiconnected());
  websocket.onerror = error => console.error('WS ERROR', error.data);
  websocket.onmessage = (event: MessageEvent) => dispatch(JSON.parse(event.data));
  return action => {
    next(action);
  };
};

export default wsMiddleware;
