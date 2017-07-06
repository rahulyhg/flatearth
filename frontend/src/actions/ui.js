// @flow
import type { Dispatch } from 'redux';

import { WS_CONECTED, WS_DISCONECTED, WS_MESSAGE_RECIEVE, WS_MESSAGE_SEND, USER_INFO } from './types';

// type UserAuthType = {
//   _id: string,
//   email: string,
//   name: string,
//   coordinates: ?string,
//   userStatus: ?string
// };

export const wsConnected: () => {
  type: typeof WS_CONECTED
} = () => ({ type: WS_CONECTED });
export const wsDiconnected = () => ({
  type: WS_DISCONECTED
});

export const wsReceivemessage = (message: { type: typeof WS_MESSAGE_RECIEVE, payload: any }): Object => ({
  type: message.type,
  payload: message
});

export const wsSendmessage = (action: Object): Object => ({
  type: WS_MESSAGE_SEND,
  payload: action,
  meta: { websocket: true }
});

export const updateUser = (action: Object): Object => ({
  type: USER_INFO,
  payload: { userInfo: { ...action } }
});

export const statusUpdateSend = ({ statusUpdate }: { statusUpdate: string }) => (dispatch: Dispatch<*>) => {
  dispatch(wsSendmessage({ statusUpdate }));
  dispatch(updateUser({ currentStatus: statusUpdate }));
};

export const positionUpdateSend = ({ position }: { position: string }) => (dispatch: Dispatch<*>) => {
  dispatch(wsSendmessage({ position }));
  dispatch(updateUser({ position }));
};
