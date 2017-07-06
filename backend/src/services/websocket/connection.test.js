// const users = ['Oleg', 'Shakti', 'Shiva', 'Jesus', 'Krishna', 'Budha'];
// const message = ['Hare Krishna', 'OM Mani Padme Hum', 'Om Namah Shivaya'];
// let data;
// let counter = 0;
// const usersNotificationTest = wss => () => {
//   counter++;
//   data = {
//     id: counter,
//     name: users[Math.floor(Math.random() * users.length)],
//     country: 'MiddleEarth',
//     statusMessage: message[Math.floor(Math.random() * message.length)]
//   };
//   wss.broadcast(
//     JSON.stringify({
//       type: 'ws_users_statuses',
//       newStatus: data
//     })
//   );
// };
