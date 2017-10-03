var _       = require('lodash'),
    Promise = require('bluebird'),
    expect  = require('chai').expect,
    rewire  = require('rewire'),
    sinon   = require('sinon'),
    mod     = rewire('../lib/markitondemand');


const FIXTURES = {
   QUOTES: require('./fixtures/quotes'),
   INFO:   require('./fixtures/info')
};


const expectKeys = [
  'Status',
  'Name',
  'Symbol',
  'LastPrice',
  'Change',
  'ChangePercent',
  'Timestamp',
  'MSDate',
  'MarketCap',
  'Volume',
  'ChangeYTD',
  'ChangePercentYTD',
  'High',
  'Low',
  'Open'
];


describe('unit > markitondemand', function() {
  this.spies = {};

  // Create a mock function for getData
  var getData = function(url) {
    return new Promise((resolve, reject) => {
      var symbol = url.substring((url.lastIndexOf('=') + 1)).toUpperCase();

      if (url.indexOf('Quote') >= 0) {
        resolve(FIXTURES.QUOTES[symbol]);
      }
      else if (url.indexOf('Lookup') >= 0) {
        resolve(FIXTURES.INFO[symbol]);
      }
      else {
        reject(new Error('Error occurred.'));
      }

    });
  };


  beforeEach(() => {
    // Create a Sinon Spy for getData
    this.spies.getData = sinon.spy(getData);

    // Override the private method getData using rewire and the Sinon Spy
    this.getData = mod.__set__('getData', this.spies.getData);
  });


  afterEach(() => {
    // restores to the original getData
    this.getData();

    // resets the Sinon Spy for getData
    this.spies.getData.reset();
  });


  describe('getQuote()', () => {
    it('should throw an error if no symbol is supplied', () => {
      return mod.getQuote()
      .catch((error) => {
        expect(error).to.exist;
        expect(error.message).to.equal('Requires parameter symbol');
      });
    });

    it('should throw an error if a non alpha string is specfied as a symbol', () => {
      return mod.getQuote('123')
      .catch((error) => {
        expect(error).to.exist;
        expect(error.message).to.equal('Invalid symbol');
      });
    });

    it('should get stock quotes when provided with a valid symbol', () => {
      return mod.getQuote('GOOGL')
      .then((quote) => {
        expect(this.spies.getData.calledOnce).to.be.true;
        expect(this.spies.getData.calledWith('/Quote/json?symbol=googl')).to.be.true;
        expect(quote).to.contain.all.keys(expectKeys);
      });
    });

    it('should throw an error if no matching symbols are found', () => {
      return mod.getQuote('WEIRDAL')
      .catch(error => {
        expect(error).to.exist;
        expect(error.message).to.equal('No matching symbols found');
        expect(this.spies.getData.calledOnce).to.be.true;
        expect(this.spies.getData.calledWith('/Quote/json?symbol=weirdal')).to.be.true;
      });
    });

  });


  describe('getQuotes()', () => {
    it('should fail if no paramter is passed', () => {
      return mod.getQuotes()
      .catch(error => {
        expect(error).to.exist;
        expect(error.message).to.equal('Requires parameter symbols');
      });
    });


    it('should fail if a string is passed instead of an array', () => {
      return mod.getQuotes('not an array')
      .catch(error => {
        expect(error).to.exist;
        expect(error.message).to.equal('Invalid type, requires an array of symbols');
      });
    });


    it('should return an array of stock quotes', () => {
      return mod.getQuotes(['GOOGL', 'AAPL'])
      .then(quotes => {
        expect(quotes).to.be.an.array;
        expect(_.first(quotes)).to.contain.all.keys(expectKeys);

        expect(this.spies.getData.calledTwice).to.be.true;
        expect(this.spies.getData.calledWith('/Quote/json?symbol=googl')).to.be.true;
        expect(this.spies.getData.calledWith('/Quote/json?symbol=aapl')).to.be.true;
      });
    });

  });


  describe('getQuotesObject()', () => {
    it('should return an object with stock quotes', () => {
      return mod.getQuotesObject(['GOOGL', 'AAPL', 'FB'])
      .then(quotes => {
        expect(quotes).to.be.an.object;
        expect(quotes['GOOGL']).to.contain.all.keys(expectKeys);

        expect(this.spies.getData.calledThrice).to.be.true;
        expect(this.spies.getData.calledWith('/Quote/json?symbol=googl')).to.be.true;
        expect(this.spies.getData.calledWith('/Quote/json?symbol=aapl')).to.be.true;
        expect(this.spies.getData.calledWith('/Quote/json?symbol=fb')).to.be.true;
      });
    });

  });


  describe('getStock()', () => {
    it('should fail if no paramter is passed', () => {
      return mod.getStock()
      .catch(error => {
        expect(error).to.exist;
        expect(error.message).to.equal('Requires parameter symbol');
      });
    });


    it('should fail if an invalid string is passed', () => {
      return mod.getStock('123')
      .catch(error => {
        expect(error).to.exist;
        expect(error.message).to.equal('Invalid symbol');
      });
    });


    it('should return an array of stock information', () => {
      return mod.getStock('AAPL')
      .then(data => {
        expect(data).to.be.an.array;

        expect(this.spies.getData.calledOnce).to.be.true;
        expect(this.spies.getData.calledWith('/Lookup/json?input=aapl')).to.be.true;
      });
    });

  });

});


describe('integration > markitondemand', function() {
  it('should get stock quotes when provided with a valid symbol', () => {
    return mod.getQuote('GOOGL')
    .then((quote) => {
      expect(quote).to.contain.all.keys(expectKeys);
    });
  });


  it('should throw an error if no matching symbols are found', () => {
    return mod.getQuote('WEIRDAL')
    .catch(error => {
      expect(error).to.exist;
      expect(error.message).to.equal('No matching symbols found');
    });
  });
});
