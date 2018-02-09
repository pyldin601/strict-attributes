# strict-attributes

Converts a plain object into an object that throws an error on try to read attributes that does not exist.

## Example
```javascript
// Port value will be "undefined" if environment variable not set and program will continue to run.
const port = process.env.PORT;
```

```javascript
const strict = require('strict-attributes');

// Exception will be thrown if environment variable not set.
const port = strict(process.env).PORT; 
```
