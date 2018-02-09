const strict = require('./');

test('Get attribute that exists', () => {
  const obj = {
    foo: 'bar',
  };
  expect(strict(obj).foo).toBe('bar');
});

test('Fail on attribute that does not exist', () => {
  const obj = {
    foo: 'bar',
  };
  expect(() => strict(obj).baz).toThrowError("Object has no attribute 'nodejs'");
});

test('Fail on not plain object', () => {
  expect(() => strict('foo')).toThrowError("Argument should be an object");
});

