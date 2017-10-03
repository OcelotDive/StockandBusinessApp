/**
 *  Fixtures for tests
 */

const AAPL = {
  "Status": "SUCCESS",
  "Name": "Apple Inc",
  "Symbol": "AAPL",
  "LastPrice": 110.06,
  "Change": 0.109999999999999,
  "ChangePercent": 0.100045475216007,
  "Timestamp": "Fri Nov 18 00:00:00 UTC-05:00 2016",
  "MSDate": 42692,
  "MarketCap": 586874368780,
  "Volume": 28428917,
  "ChangeYTD": 105.26,
  "ChangePercentYTD": 4.56013680410412,
  "High": 110.54,
  "Low": 109.66,
  "Open": 109.72
};

const FB = {
  "Status": "SUCCESS",
  "Name": "Facebook, Inc.",
  "Symbol": "FB",
  "LastPrice": 117.02,
  "Change": -0.77000000000001,
  "ChangePercent": -0.653705747516776,
  "Timestamp": "Fri Nov 18 00:00:00 UTC-05:00 2016",
  "MSDate": 42692,
  "MarketCap": 337271182340,
  "Volume": 22879303,
  "ChangeYTD": 104.66,
  "ChangePercentYTD": 11.8096694056946,
  "High": 119.13,
  "Low": 116.84,
  "Open": 118.39
};

const GOOGL = {
  "Status": "SUCCESS",
  "Name": "Alphabet Inc",
  "Symbol": "GOOGL",
  "LastPrice": 753.22,
  "Change": -18.53,
  "ChangePercent": -2.40103660511823,
  "Timestamp": "Mon Nov 14 00:00:00 UTC-05:00 2016",
  "MSDate": 42688,
  "MarketCap": 259219156560,
  "Volume": 3688274,
  "ChangeYTD": 778.01,
  "ChangePercentYTD": -3.18633436588218,
  "High": 771.78,
  "Low": 743.59,
  "Open": 771.76
};

const WEIRDAL = {
  "Message": "No symbol matches found for weirdal. Try another symbol such as MSFT or AAPL, or use the Lookup API."
};

module.exports = {
  AAPL,
  FB,
  GOOGL,
  WEIRDAL
};
