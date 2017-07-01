'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _createEmtpyDb = require('./db/createEmtpyDb');

var _createEmtpyDb2 = _interopRequireDefault(_createEmtpyDb);

var _fixtures = require('../fixtures');

var _fixtures2 = _interopRequireDefault(_fixtures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { users, roles } = _fixtures2.default;

async function createFixtures(Model, fixture) {
  await Model.remove({});
  for (let data of fixture) {
    try {
      await Model.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }
}

exports.default = () => new Promise((resolve, reject) => {
  if (process.env.MOONGOSE_DEBUG) {
    _mongoose2.default.set('debug', true);
  }

  _mongoose2.default.connection.on('error', error => reject(error)).on('close', () => console.log('Database connection closed.')).once('open', async () => {
    // await Promise.all[
    //   (createEmptyDb(), createFixtures(Roles, roles), createFixtures(User, users))
    // ];
    resolve(_mongoose2.default.connection.db);
    if (_config2.default.mongoose.uri.includes('mlab')) {
      console.log('\x1b[36m%s\x1b[0m', 'Connected to MongoLab');
    } else {
      console.log('Server uses local-Database');
    }
  });
  console.log('Database initialization...');

  _mongoose2.default.Promise = Promise;

  _mongoose2.default.connect(_config2.default.mongoose.uri, _config2.default.mongoose.options, err => {
    if (err) {
      console.log(err);
    }
  });
});
//# sourceMappingURL=mongoose.js.map