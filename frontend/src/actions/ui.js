// @flow
import { WS_CONECTED, WS_DISCONECTED, WS_MESSAGE_RECIEVE, WS_MESSAGE_SEND } from './types';

type SocketRecieveMessage = {
  type: 'TEST',
  data: {
    id: number,
    name: string,
    country: string,
    statusMessage: string
  }
};

export const wsConnected: () => { type: typeof WS_CONECTED } = () => ({ type: WS_CONECTED });
export const wsDiconnected = () => ({ type: WS_DISCONECTED });

export const wsReceivemessage = (message: {
  type: typeof WS_MESSAGE_RECIEVE,
  payload: any
}): Object => {
  return { type: message.type, payload: message };
};

export const wsSendmessage = (action: string): Object => ({
  type: WS_MESSAGE_SEND,
  payload: action,
  meta: { websocket: true }
});

export const wsUsersState = (action): Object => {
  return { type: action.type };
};
