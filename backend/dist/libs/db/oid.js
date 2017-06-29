'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// oid('course1') => generates always same id
exports.default = str => _crypto2.default.createHash('md5').update(str).digest('hex').substring(0, 24);
//# sourceMappingURL=oid.js.map