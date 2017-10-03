[![Build status](https://travis-ci.org/gswalden/tickertape.svg?branch=master)](https://travis-ci.org/gswalden/tickertape)
[![Dependencies](https://david-dm.org/gswalden/tickertape.svg)](https://david-dm.org/gswalden/tickertape)

### Install
```sh
npm install --save ticker-tape
```

---

### Use
```js
var TickerTape = require('ticker-tape')
  , tape = new TickerTape()
  ;

tape.on('tick', function(stock) {
  console.log('Stock symbol: ' stock.symbol);
  console.log('Stock price: ' stock.price);
  console.log('Stock volume: ' stock.volume);
});
```

---

### Tests
```sh
npm test
```
