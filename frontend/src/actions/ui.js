// @flow
import { WS_CONECTED, WS_DISCONECTED, WS_MESSAGE_RECIEVE } from './types';

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

export const wsReceivemessage = (message) => {
  return { type: message.type, payload: message };
};

export const wsSendmessage = (action): Object => {
  return { type: action.type, payload: action.payload };
};

export const wsUsersState = (action): Object => {
  return { type: action.type };
};
