var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var formData = require('express-form-data');
var os = require('os');
var mongoose = require('mongoose');

var authRouter = require('./routes/auth');

var app = express();
const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin : "*"
}));

app.use(formData.parse({
  uploadDir: os.tmpdir(),
  autoClean: true
}));


/**
 * Server Routing configuration
 */
app.use('/auth', authRouter);
/** -----------------------------------------------------------  */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

mongoose.connect('mongodb://localhost:27017/ArticleSystem')
  .then(function(result){
    console.log(result);
  })
  .catch(function(err){
    console.log(err);
  });

module.exports = app;
