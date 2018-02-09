const handler = {
  get: (target, attr) => {
    if (attr in target) {
      return target[attr];
    }
    throw new TypeError(`Object has no attribute '${name}'`);
  },
};

module.exports = (obj) => {
  if (typeof obj !== 'object') {
    throw new TypeError(`Argument should be an object`);
  }

  return new Proxy(obj, handler);
}
