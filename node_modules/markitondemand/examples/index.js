var markitondemand = require('../lib/markitondemand');


/**
 * Get one Stock Quote with getQuote()
 */
markitondemand.getQuote('GOOG')
.then(data => console.log(data))
.catch(error => {
  console.error(error.message);
});


/**
 * Get multiple Stock Quotes with getQuotes()
 */
markitondemand.getQuotes(['GOOG', 'AAPL', 'TSLA', 'NVDA'])
.then(data => console.log(data))
.catch(error => {
  console.error(error.message);
});


/**
 * Get multiple Stock Quotes in Object form with getQuotes()
 */
markitondemand.getQuotesObject(['GOOG', 'AAPL', 'TSLA', 'NVDA'])
.then(data => console.log(data))
.catch(error => {
  console.error(error.message);
});


/**
 * Lookup stock information
 */
markitondemand.getStock('AAPL')
.then(data => console.log(data))
.catch(error => {
  console.error(error.message);
});
