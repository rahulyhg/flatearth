'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _config = require('config');

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _mongoose = require('./libs/mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _APIModules = require('./modules/API-modules');

var _APIModules2 = _interopRequireDefault(_APIModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mongoose2.default)();


const app = new _koa2.default();
const middlewares = _fs2.default.readdirSync((0, _path.join)(__dirname, './middlewares')).sort();

middlewares.forEach(middleware => {
  // eslint-disable-next-line
  app.use(require(`./middlewares/${middleware}`).default);
});

app.use((0, _koaMount2.default)('/api/v1', _APIModules2.default));

app.listen(_config.PORT, err => {
  if (err) throw new Error(err);
  console.log('server running at %s:%s', _config.HOST, _config.PORT);
});
//# sourceMappingURL=app.js.map