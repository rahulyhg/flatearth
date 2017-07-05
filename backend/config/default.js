const { secret } = require('rc')('backend');
module.exports = {
  mongoose: {
    uri: process.env.MONGO_DB || 'mongodb://sa:123@ds064649.mlab.com:64649/deb-db-flatearth',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        },
        poolSize: 5
      },
      db: {
        nativeParser: true
      }
    }
  },
  secret,
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3001
};
