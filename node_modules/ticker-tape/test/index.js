'use strict';

const should = require('chai').should()
  , TickerTape = require('../')
  , _ = require('lodash')
  ;

describe('TickerTape tests', function() {
  it('new TickerTape({ numStocks: 1 }) only includes 1 stock', function() {
    const ticker = new TickerTape({ numStocks: 1 });
    ticker.stocks.length.should.eq(1);
  });

  it('new TickerTape({ numStocks: 10 }) only includes 10 stocks', function() {
    const ticker = new TickerTape({ numStocks: 10 });
    ticker.stocks.length.should.eq(10);
  });

  it('tick event shows a price change', function(done) {
    const ticker = new TickerTape();
    const initPrice = ticker.stocks[0].price;
    ticker.once('tick', stock => {
      stock.price.should.not.eq(initPrice);
      done();
    });
  });

  it('tick event shows a volume', function(done) {
    const ticker = new TickerTape();
    ticker.once('tick', stock => {
      stock.volume.should.be.gt(0);
      done();
    });
  });

  it('stop() ends the tape', function(done) {
    const ticker = new TickerTape();
    ticker.on('end', stocks => {
      stocks.should.be.an('array').with.length(1);
      done();
    });
    ticker.stop();
  });
});
