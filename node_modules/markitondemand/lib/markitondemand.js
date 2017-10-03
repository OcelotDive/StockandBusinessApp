/**
 * @author Ahmed Farooki
 * @description marokitondemand
 *
 * A node module to get stock quotes from the markitondemand api
 */
'use strict';

var Promise = require('bluebird'),
    request = require('request-promise'),
    _       = require('lodash');


/**
 * BASEURL is the base of the API URL for Markit On Demand
 * @type {String}
 */
const BASEURL = "http://dev.markitondemand.com/MODApis/Api/v2";


/**
 * REGEX_STRING is the regex pattern to check for correct string
 * @type {RegExp}
 */
const REGEX_STRING = /^[a-zA-Z]+$/;


/**
 * isValidSymbol checks to see if the symbol is of correct type and format
 * @param  {String} symbol the symbol being checked
 * @return {Boolean} returns true if symbol is a string and valid format
 */
function isValidSymbol(symbol) {
  return !!(typeof(symbol) === 'string' && REGEX_STRING.test(symbol));
}


/**
 * getData() makes the GET request to get the required data
 * @param  {String} url the API endpoint that we're accessing
 * @return {Promise} returns a Promise that resolves an object with the response
 *                   of the API request
 */
function getData(url) {
  const options = {
    uri: BASEURL + url,
    method: 'GET'
  };

  return request(options)
  .then(response => {
    return JSON.parse(response);
  });
}


/**
 * getStock() Lookup stock symbols
 * @param  {String} symbol the stock symbol that you want to lookup
 * @return {Promise} returns a Promise that resolves an array with related
 *                   company information
 */
const getStock = function getStock(symbol) {
  if (!symbol) return Promise.reject(new Error('Requires parameter symbol'));

  if (!isValidSymbol(symbol)) {
    return Promise.reject(new Error('Invalid symbol'));
  }

  const url = '/Lookup/json?input=' + symbol.toLowerCase();

  return getData(url);
}


/**
 * getQuote() Get stock quote, realtime price, etc
 * @param  {string} symbol the stock symbol that you want to lookup
 * @return {Promise} returns a Promise that resolves an object with the stock quotes
 */
const getQuote = function getQuote(symbol) {
  if (!symbol) return Promise.reject(new Error('Requires parameter symbol'));

  if (!isValidSymbol(symbol)) {
    return Promise.reject(new Error('Invalid symbol'));
  }

  const url = '/Quote/json?symbol=' + symbol.toLowerCase();

  return getData(url).then(response => {
    if (response.Status === 'SUCCESS') {
      return response;
    }
    else {
      return Promise.reject(new Error('No matching symbols found'));
    }
  });
}


/**
 * getQuotes Get multiple stock quotes with one call
 * @param  {Array} symbols array of symbols
 * @return {Promise} returns a Promise that resolves an array of objects with
 *                   stock quote data
 */
const getQuotes = function(symbols) {
  if (!symbols) return Promise.reject(new Error('Requires parameter symbols'));

  if (!Array.isArray(symbols)) {
    return Promise.reject(new Error('Invalid type, requires an array of symbols'));
  }

  return Promise.map(symbols, symbol => getQuote(symbol));
}


/**
 * getQuotesObject() Get multiple stock quotes in Object form with one call
 * @param  {Array} symbols array of symbols
 * @return {Promise} returns a Promise that resolves an Object with stock quote
 *                   objects keyed by the symbols
 */
const getQuotesObject = function(symbols) {
  return getQuotes(symbols)
  .then(quotes => {
    return _.zipObject(symbols, quotes);
  });
}


module.exports = {
  getStock,
  getQuote,
  getQuotes,
  getQuotesObject,

  lookup: getStock,
};
