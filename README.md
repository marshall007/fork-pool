# Fork-Pool

[![Build Status](https://secure.travis-ci.org/thisandagain/fork-pool.png?branch=master)](http://travis-ci.org/thisandagain/fork-pool)

## Installation

```bash
npm install fork-pool
```

## Basic Use

```javascript
// Parent process
var pool    = new Pool({
    path: __dirname + '/child.js'
});
pool.enqueue({ event: 'greet', data: { name: 'world' } }, function (err, data) {
    console.log(data);   // hello world
});
```

```javascript
// Child process
var child = require('fork-pool/lib/child')(process);

child.on('greet', function (data) {
    child.send('data', 'hello ' + data.name);
});
```

## Parameters

- settings: Pool settings
    - path: Required, Child process path (generally, you will want to prefix with "__dirname")
    - name Optional, Defaults to "fork-pool"
    - size Optional, Defaults to # of CPUs
    - log Optional, Defaults to false
    - timeout Optional, Defaults to 30000ms
    - onCreate: Optional, Called each time a new `child_process` is created (useful for initializing workers after creation)

- args: Child process arguments
- options: Child process options

## Testing

```bash
npm test
```
