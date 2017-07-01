export const safeSend = (ws, message) => {
  try {
    ws.send(JSON.stringify(message));
  } catch (e) {}
};

export const asyncSafeSend = (ws, message) => {
  safeSend(ws, { ...message, status: 'PENDING' });
  safeSend(ws, message);
};
