var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var app = express();
var port = process.env.port || 3000;
var db = 'mongodb://localhost:27017/stocksapp';
// view engine setup



//connect to mongo

mongoose.connect(process.env.MONGODB_URI || db, function (err) {
    if (err) {
        console.log(err)
    };

});

mongoose.connection.on('connected', function () {
    console.log('Successfully opened a connection to ' + db);
});

mongoose.connection.on('disconnected', function () {
    console.log('Successfully disconnected from ' + db);
});

mongoose.connection.on('error', function () {
    console.log('An error has occured attempting to connect to ' + db);
});




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use('/api', api);
app.get('*', function (request, resp) {
    resp.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port, function () {
  

console.log(`Server started on port ${port}`)
//module.exports = server;
})
console.log(process.env.secret)