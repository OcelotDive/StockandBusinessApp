markitondemand
===================
[![npm version](https://badge.fury.io/js/markitondemand.svg)](http://badge.fury.io/js/markitondemand)
[![Build Status](https://travis-ci.org/ahmedfarooki/markitondemand.svg?branch=master)](https://travis-ci.org/ahmedfarooki/markitondemand)
[![Coverage Status](https://coveralls.io/repos/ahmedfarooki/markitondemand/badge.svg)](https://coveralls.io/r/ahmedfarooki/markitondemand)

![markitondemand.js Logo](https://raw.githubusercontent.com/ahmedfarooki/markitondemand/master/docs/img/mod-sm.png)

Node.js library for accessing the **[Markit On Demand](http://dev.markitondemand.com)** APIs . Markit On Demand 'offers an opportunity to explore the complexity of financial data in building great tools'. The library gives you the ability to lookup stock symbols and and get stock quotes. This version is prosmified using the excellent bluebird library.

### Getting Started

To install the npm package:

```bash
    $ npm install markitondemand --save
```


### getQuote()

Get stock quote for one symbol.

```javascript
var markitondemand = require('markitondemand');

markitondemand.getQuote('GOOG')
.then(data => console.log(data))
.catch(error => {
  console.error(error.message);
});
```

### getQuotes()

Get multiple stock quotes in array form.

```javascript
markitondemand.getQuotes(['GOOG', 'AAPL', 'TSLA', 'NVDA'])
.then(data => console.log(data))
.catch(error => {
  console.error(error.message);
});
```

### getQuotesObject()

Get multiple stock quotes in object form, keyed by the symbol.

```javascript
markitondemand.getQuotesObject(['GOOG', 'AAPL', 'TSLA', 'NVDA'])
.then(data => console.log(data))
.catch(error => {
  console.error(error.message);
});
```

### getStock() or lookup()

Look up stock symbols

```javascript
markitondemand.getStock('AAPL')
.then(data => console.log(data))
.catch(error => {
  console.error(error.message);
});
```

### Tests

To run tests (requires mocha):

```bash
    $ npm test
```

### Author

Ahmed Farooki
<ahmedfarooki@gmail.com>

### License

The MIT License (MIT)

Copyright (c) 2016 Ahmed Farooki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
