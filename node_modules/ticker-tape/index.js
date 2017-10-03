'use strict';

const _ = require('lodash')
  , EventEmitter = require('events')
  ;

const defaults = {
  numStocks: 1,

};

class TickerTape extends EventEmitter {
  constructor(opt) {
    super();
    this.opt = Object.assign({}, defaults, opt);
    this.stocks = [];
    let i = this.opt.numStocks;
    while (i-- > 0) {
      this.stocks.push({
        symbol: generateSymbol(),
        price: _.random(1, 1000)
      });
    }
    this.interval = setInterval(this.update.bind(this), 10);
  }

  update() {
    this.stocks.forEach(stock => {
      do {
        var change = _.random(-1, 1);
      } while (change === 0);
      stock.price += change;
      stock.volume = _.random(1, 500);
      this.emit('tick', _.clone(stock));
    });
  }

  stop() {
    clearInterval(this.interval);
    this.emit('end', this.stocks);
  }
}

function generateSymbol() {
  const r = randLetter;
  return String.fromCharCode(r(), r(), r());
}

function randLetter() {
  return _.random(65, 90);
}

module.exports = TickerTape;
