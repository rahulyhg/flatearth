'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _log = require('log');

var _log2 = _interopRequireDefault(_log);

var _thunkify = require('thunkify');

var _thunkify2 = _interopRequireDefault(_thunkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _log2.default)();

exports.default = async () => {
  let db;

  if (_mongoose2.default.connection.readyState === 1) {
    // connected
    db = _mongoose2.default.connection.db;
  } else {
    db = await (0, _thunkify2.default)(_mongoose2.default.connection.on)('open');
  }

  await clearDatabase(db);
  await ensureIndexes();
  await ensureCapped();
};

async function clearDatabase(db) {
  const collections = await db.listCollections().toArray();
  // var collections = yield new Promise(function(resolve, reject) {
  //   db.listCollections().toArray(function(err, items) {
  //     if (err) return reject(err);
  //     resolve(items);
  //   });
  // });

  const collectionNames = collections.map(collection => {
    if (collection.name.indexOf('system.') === 0) {
      return null;
    }
    return collection.name;
  }).filter(Boolean);

  collectionNames.map(name => (0, _thunkify2.default)(db.dropCollection)(name));
}

// wait till indexes are complete, especially unique
// required to throw errors
async function ensureIndexes(db) {
  await _mongoose2.default.modelNames().map(modelName => {
    const model = _mongoose2.default.models[modelName];
    return (0, _thunkify2.default)(model.ensureIndexes.bind(model))();
  });
}

// ensure that capped collections are actually capped
async function ensureCapped(db) {
  await _mongoose2.default.modelNames().map(modelName => {
    const model = _mongoose2.default.models[modelName];

    const schema = model.schema;
    if (!schema.options.capped) return;
    return (0, _thunkify2.default)(db.command)({
      convertToCapped: model.collection.name,
      size: schema.options.capped
    });
  });
}
//# sourceMappingURL=createEmtpyDb.js.map