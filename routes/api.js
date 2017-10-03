var express = require('express');
var router = express.Router();
var Stock = require('../models/stocks');
/* GET home page. */
var get = require('simple-get');
var gfinance = require('gfinance');
var Quandl = require("quandl");
var money = require('money-js');
const currencyConvert = require('currency-convert')
var endDate;
var startDate;


function getDates() {
    
var date = new Date();
var date2 = new Date();
date2.setDate(date2.getDate() - 7);         
 endDate = date.toISOString().substring(0,10);
 startDate = date2.toISOString().substring(0,10);

     
     
     console.log(endDate);
     console.log(startDate);
    
    
}


var currencyArr = [];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res) {
    if (req) {
        console.log("this is a test")

       
    

    
    
    
    
    
    
    
    
    
    


    
    
    
    
    


var usdObject ={base: 'usDollars'};
var euroObject ={base: 'euros'};
var gbpObject ={base: 'pounds'};
var cadObject ={base: 'canadian'};
var audObject ={base: 'australian'};
var jpyObject ={base: 'yen'};
     
   
        
function usdConversion(callback) { 
      
currencyConvert(1, 'USD', 'AUD').then(function(resp){
    var usdToAud = parseFloat(resp).toFixed(2);
    
    usdObject.aud = usdToAud;
}).catch(console.log)

currencyConvert(1, 'USD', 'GBP').then(function(resp){
    var usdToGbp = parseFloat(resp).toFixed(2);
    usdObject.gbp = usdToGbp;
}).catch(console.log)

currencyConvert(1, 'USD', 'CAD').then(function(resp) {
    var usdToCad = parseFloat(resp).toFixed(2);
    usdObject.cad = usdToCad;
}).catch(console.log)

currencyConvert(1, 'USD', 'EUR').then(function(resp) {
    var usdToEur = parseFloat(resp).toFixed(2);

    usdObject.eur = usdToEur;
}).catch(console.log)

currencyConvert(1, 'USD', 'JPY').then(function(resp) {
    var usdToJpy = parseFloat(resp).toFixed(2);

    usdObject.jpy = usdToJpy;
}).catch(console.log)
       
 if(callback){

     
    return callback(usdObject);
 }
}
 usdConversion(callback);

       
   
function euroConversion(callback) { 
      
currencyConvert(1, 'EUR', 'USD').then(function(resp){
    var eurToUsd = parseFloat(resp).toFixed(2);
    euroObject.usd = eurToUsd;

}).catch(console.log)

currencyConvert(1, 'EUR', 'GBP').then(function(resp){
    var eurToGbp = parseFloat(resp).toFixed(2);
    euroObject.gbp = eurToGbp;
}).catch(console.log)

currencyConvert(1, 'EUR', 'CAD').then(function(resp) {
    var eurToCad = parseFloat(resp).toFixed(2);
    euroObject.cad = eurToCad;
}).catch(console.log)


currencyConvert(1, 'EUR', 'AUD').then(function(resp) {
    var eurToAud = parseFloat(resp).toFixed(2);
    euroObject.aud = eurToAud;
}).catch(console.log)


currencyConvert(1, 'EUR', 'JPY').then(function(resp) {
    var eurToJpy = parseFloat(resp).toFixed(2);
    euroObject.jpy = eurToJpy;
}).catch(console.log)


if (callback){
    
    return callback(euroObject);
 }

       
}
 
  euroConversion(callback);
   
        
        
  function gbpConversion(callback) {
        
currencyConvert(1, 'GBP', 'USD').then(function(resp){
    var gbpToUsd = parseFloat(resp).toFixed(2);
    gbpObject.usd = gbpToUsd;

}).catch(console.log)

currencyConvert(1, 'GBP', 'EUR').then(function(resp){
    var gbpToEur = parseFloat(resp).toFixed(2);
    gbpObject.eur = gbpToEur;
    
}).catch(console.log)


currencyConvert(1, 'GBP', 'CAD').then(function(resp){
    var gbpToCad = parseFloat(resp).toFixed(2);
    gbpObject.cad = gbpToCad;

}).catch(console.log)


currencyConvert(1, 'GBP', 'AUD').then(function(resp){
    var gbpToAud = parseFloat(resp).toFixed(2);
    gbpObject.aud = gbpToAud;

}).catch(console.log)


currencyConvert(1, 'GBP', 'JPY').then(function(resp){
    var gbpToJpy = parseFloat(resp).toFixed(2);
    gbpObject.jpy = gbpToJpy;

}).catch(console.log)


if (callback){
    
    return callback(gbpObject);
 }


    }    
        
      gbpConversion(callback);
     
        


          
function cadConversion(callback) { 
      
currencyConvert(1, 'CAD', 'AUD').then(function(resp){
    var cadToAud = parseFloat(resp).toFixed(2);
    cadObject.aud = cadToAud;

}).catch(console.log)

currencyConvert(1, 'CAD', 'GBP').then(function(resp){
    var cadToGbp = parseFloat(resp).toFixed(2);
    cadObject.gbp = cadToGbp;

}).catch(console.log)

currencyConvert(1, 'CAD', 'USD').then(function(resp) {
    var cadToUsd = parseFloat(resp).toFixed(2);
    cadObject.usd = cadToUsd;
    console.log(cadObject)
}).catch(console.log)

currencyConvert(1, 'CAD', 'EUR').then(function(resp) {
    var cadToEur = parseFloat(resp).toFixed(2);
    cadObject.eur = cadToEur;

}).catch(console.log)

currencyConvert(1, 'CAD', 'JPY').then(function(resp) {
    var cadToJpy = parseFloat(resp).toFixed(2);
    cadObject.jpy = cadToJpy;

}).catch(console.log)
       
 if(callback){
    
    return callback(cadObject);
 }
}
cadConversion(callback);
      
        
        
function audConversion(callback) { 
      
currencyConvert(1, 'AUD', 'USD').then(function(resp){
    var audToUsd = parseFloat(resp).toFixed(2);
    audObject.usd = audToUsd;

}).catch(console.log)

currencyConvert(1, 'AUD', 'GBP').then(function(resp){
    var audToGbp = parseFloat(resp).toFixed(2);
    audObject.gbp = audToGbp;

}).catch(console.log)

currencyConvert(1, 'AUD', 'CAD').then(function(resp) {
    var audToCad = parseFloat(resp).toFixed(2);
    audObject.cad = audToCad;

}).catch(console.log)

currencyConvert(1, 'AUD', 'EUR').then(function(resp) {
    var audToEur = parseFloat(resp).toFixed(2);
    audObject.eur = audToEur;

}).catch(console.log)

currencyConvert(1, 'AUD', 'JPY').then(function(resp) {
    var audToJpy = parseFloat(resp).toFixed(2);
    audObject.jpy = audToJpy;

}).catch(console.log)
       
 if(callback){
    
    return callback(audObject);
 }
}
 audConversion(callback);
     
        
        
function jpyConversion(callback) { 
      
currencyConvert(100, 'JPY', 'AUD').then(function(resp){
    var jpyToAud = parseFloat(resp).toFixed(2);
    jpyObject.aud = jpyToAud;
}).catch(console.log)

currencyConvert(100, 'JPY', 'GBP').then(function(resp){
    var jpyToGbp = parseFloat(resp).toFixed(2);
    jpyObject.gbp = jpyToGbp;
}).catch(console.log)

currencyConvert(100, 'JPY', 'CAD').then(function(resp) {
    var jpyToCad = parseFloat(resp).toFixed(2);
    jpyObject.cad = jpyToCad;
}).catch(console.log)

currencyConvert(100, 'JPY', 'EUR').then(function(resp) {
    var jpyToEur = parseFloat(resp).toFixed(2);
    jpyObject.eur = jpyToEur;
}).catch(console.log)

currencyConvert(100, 'JPY', 'USD').then(function(resp) {
    var jpyToUsd = parseFloat(resp).toFixed(2);
    jpyObject.usd = jpyToUsd; 
}).catch(console.log)
       
 if(callback){
    
    return callback(jpyObject);
 }
    
}
jpyConversion(callback);
  
        
        
    function callback(object) {
    setTimeout(function() {
     console.log(object)
        
    currencyArr.push(object)
         
        if(currencyArr.length === 6){
        console.log('this is the currency array ' + currencyArr);
            
            
            
        }
     
    },1000)
     console.log(currencyArr)
     
     return currencyArr;
 }    
          
      
      setTimeout(function() {
      
         
        return res.status(200).send(currencyArr);
          
          res.end();
          
      },3000)
     
    }

    
    currencyArr = [];
   
});


 /*router.get('/singleQuote', function(req,res) {
     console.log(req.body);
     
     finance.get(quoteInfo, function (err, res) {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});   
 })*/
var goldResponse = '';

 router.get('/goldQuote', function(req,res) {
     console.log("gold comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "LBMA",
  table: "gold"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
   
goldResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
        console.log('this is the gold response ' + goldResponse)
      
         
         
          return res.status(200).send(goldResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });


    var silverResponse = '';

router.get('/silverQuote', function(req,res) {
     console.log("silver comm Route firing");
     

      
  getDates();
  
   
   
     

     
     
var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
 
quandl.dataset({
  source: "LBMA",
  table: "silver"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 1
}, function(err, response){
    if(err)
        throw err;
 
    silverResponse = JSON.parse(response).dataset;
});
    
    
        setTimeout(function(){
        if (req) {
        
          return res.status(200).send(silverResponse);
         

    }

    res.end();
     },3000);
 });


var oilResponse = '';

 router.get('/oilQuote', function(req,res) {
     console.log("oil comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "CHRIS",
  table: "CME_CL1"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 

oilResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
        console.log('this is the oil response ' + oilResponse)
      
         
         
          return res.status(200).send(oilResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });





 var aluminumResponse = '';

 router.get('/aluminumQuote', function(req,res) {
     console.log("aluminum comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "LME",
  table: "PR_AL"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
    
aluminumResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
       
      
         
         
          return res.status(200).send(aluminumResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });







 var tinResponse = '';

 router.get('/tinQuote', function(req,res) {
     console.log("tin comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "LME",
  table: "PR_TN"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
   
tinResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
     
      
         
         
          return res.status(200).send(tinResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });



 var cornResponse = '';

 router.get('/cornQuote', function(req,res) {
     console.log("corn comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "CHRIS",
  table: "CME_C1"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
 
cornResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
     
      
         
         
          return res.status(200).send(cornResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });

 var wheatResponse = '';

 router.get('/wheatQuote', function(req,res) {
     console.log("wheat comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "CHRIS",
  table: "CME_W1"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
 
wheatResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
  
      
         
         
          return res.status(200).send(wheatResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });

///new commodity routes

 var cattleResponse = '';

 router.get('/cattleQuote', function(req,res) {
     console.log("cattle comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "CHRIS",
  table: "CME_LC1"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
 
cattleResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
    
      
         
         
          return res.status(200).send(cattleResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });



 var naturalGasResponse = '';

 router.get('/naturalGasQuote', function(req,res) {
     console.log("gas comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "CHRIS",
  table: "CME_NG1"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
 
naturalGasResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
    
      
         
         
          return res.status(200).send(naturalGasResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });


 var iridiumResponse = '';

 router.get('/iridiumQuote', function(req,res) {
     console.log("iridium comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "JOHNMATT",
  table: "IRID"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
 
iridiumResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           

      
         
         
          return res.status(200).send(iridiumResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });


 var lumberResponse = '';

 router.get('/lumberQuote', function(req,res) {
     console.log("lumber comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "CHRIS",
  table: "CME_LB1"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
 
lumberResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
      
         
         
          return res.status(200).send(lumberResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });


var sugarResponse = '';

 router.get('/sugarQuote', function(req,res) {
     console.log("sugar comm Route firing");
    

getDates();



var quandl = new Quandl({
  auth_token: "SRDVUQpxCdx_UL8NvqC6",
  api_version: 3
});
         
         
quandl.dataset({
  source: "CHRIS",
  table: "ICE_SB1"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: startDate,
  end_date: endDate,
  column_index: 2
}, function(err, response){
    if(err)
        throw err;
 
 
sugarResponse = JSON.parse(response).dataset;
   
    
 
})
                setTimeout(function(){
                if (req) {
           
       
      
         
         
          return res.status(200).send(sugarResponse);
         
        
    }
                 
    res.end();
                },3000);
    
 });







//get all stocks

router.get('/stocks', function(req,res) {
    
    Stock.find({}, function(err, stocks) {
        if(err) {
            return res.status(400).send(err);
        }
        if(stocks.length < 1) {
            return res.status(400).send('No Stocks Saved Yet.');
        }
       
           // console.log(polls[0]);
        
        
        return res.status(200).send(stocks);
       
    })
})

//delte stock

router.put('/deleteStock', function(req,res) {

var stockSym = req.body;
var id = req.body._id;
console.log(req.body);

    //var conditions = {symbol: stockSym};
        
Stock.remove(req.body, function(err,result) {
    res.send((result ===1) ? {mesg: 'deleted'} : {msg: 'error: ' + err});
})
       
    
   })



//create stock

router.post('/stocks',function(req, res) {

    console.log(req.body);
   if (!req.body.symbol) {
       return res.status(400).send('No stock data supplied');
   }
     var stock = new Stock();
    stock.symbol = req.body.symbol;
 

    
   
    stock.save(function(err, document) {
       
        if(err) {
            return res.status(400).send(err);
          
        } else {
         
        return res.status(201).send({
         message: "Successfully created a stock",
            data: document
           
        })
        }
    })
  
})









module.exports = router;
