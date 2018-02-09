const isPlainObject = require('is-plain-object');

const handler = {
  get: (target, attr) => {
    if (attr in target) {
      return target[attr];
    }
    throw new TypeError(`Object has no attribute '${name}'`);
  },
};

module.exports = (obj) => {
  if (!isPlainObject(obj)) {
    throw new TypeError(`Argument should be a plain object`);
  }

  return new Proxy(obj, handler);
}
