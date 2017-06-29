"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const cache = Object.create(null);
const fiveMin = 10 * 24 * 1000;

const obj = {
  getCachedDBQuery(recoveryToken) {
    return cache[recoveryToken];
  },
  cacheDBQuery({ recoveryToken, user } = {}) {
    cache[recoveryToken] = user;
    setTimeout(() => {
      delete cache[recoveryToken];
    }, fiveMin);
  }
};

exports.default = obj;
//# sourceMappingURL=db.js.map