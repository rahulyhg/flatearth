'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _oid = require('../libs/db/oid');

var _oid2 = _interopRequireDefault(_oid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const adminID = (0, _oid2.default)('admin');
exports.default = {
  roles: [{ _id: (0, _oid2.default)('admin-role'), title: 'admin', _creator: adminID }],
  users: [{
    _id: adminID,
    email: 'admin@js.org',
    name: 'admin',
    password: 'admin',
    role: (0, _oid2.default)('admin-role')
  }]
};
//# sourceMappingURL=index.js.map