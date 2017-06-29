'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { ObjectId } = _mongoose2.default.Schema.Types;

const RolesSchema = new _mongoose2.default.Schema({
  _creator: { type: ObjectId, ref: 'User' },
  title: { type: String, default: 'user', lowercase: true }
});

exports.default = _mongoose2.default.model('Roles', RolesSchema);
//# sourceMappingURL=Roles.js.map