'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _oid = require('../libs/db/oid');

var _oid2 = _interopRequireDefault(_oid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ObjectId = _mongoose2.default.Schema.Types.ObjectId;

const UserSchema = new _mongoose2.default.Schema({
  name: { type: String, required: 'User name required', unique: true },
  passwordHash: { type: String },
  email: {
    type: String,
    unique: true,
    required: 'Email пользователя не должен быть пустым',
    validate: [{
      validator: function checkEmail(value) {
        return (/^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value)
        );
      },
      msg: 'Укажите, пожалуйста, корректный email.'
    }]
  },
  salt: {
    required: true,
    type: String
  },
  role: {
    type: ObjectId,
    required: true,
    ref: 'Roles',
    default: (0, _oid2.default)('admin-role')
  },
  lastVisited: { type: Number, default: Date.now() },
  isActivated: { type: Boolean, default: false }
});

UserSchema.virtual('password').set(function (password) {
  if (password !== undefined) {
    if (password.length < 4) {
      this.invalidate('password', 'Пароль должен быть минимум 4 символа.');
    }
  }
  this._plainPassword = password;

  this.salt = _bcryptNodejs2.default.genSaltSync(8);
  this.passwordHash = _bcryptNodejs2.default.hashSync(password, this.salt);
}).get(function () {
  return this._plainPassword;
});

UserSchema.methods.validPassword = function (password) {
  // empty password means no login by password
  if (!password) return false;
  // this user does not have password (the line below would hang!)
  if (!this.passwordHash) return false;

  return _bcryptNodejs2.default.compareSync(password, this.passwordHash);
};

UserSchema.set('toJSON', {
  transform(doc, { email, name, role, _id }) {
    return { _id, email, name, role };
  }
});

exports.default = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=User.js.map