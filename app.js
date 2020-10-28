var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require('dotenv') //need this to access .env variables via process.env --t0d
dotenv.config() //need this to access .env variables via process.env --t0d

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getAllTableRecordsRouter = require('./routes/rt-getAllTableRecords')
var addTableRecordRouter = require('./routes/rt-addTableRecord')

// const dotenv = require('dotenv') //need this to access .env variables via process.env --t0d
// dotenv.config() //need this to access .env variables via process.env --t0d

const sequelize_db_dr4c0 = require('./util_t0d/db_dr4c0')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getAllTableRecords', getAllTableRecordsRouter)
app.use('/addTableRecord', addTableRecordRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

sequelize_db_dr4c0.sync().then(result => {
  console.log(`result==> ${result}`)
  console.log(`Object.keys(result)==> ${Object.keys(result)}`)
  console.log(`JSON.stringify(result['options'])==> ${JSON.stringify(result['options'])}`)
  console.log(`JSON.stringify(result['config'])==> ${JSON.stringify(result['config'])}`)
  // console.log(`JSON.stringify(result['dialect'])==> ${JSON.stringify(result['dialect'])}`)
  // console.log(`JSON.stringify(result['queryInterface'])==> ${JSON.stringify(result['queryInterface'])}`)
  // console.log(`JSON.stringify(result['models'])==> ${JSON.stringify(result['models'])}`)
  // console.log(`JSON.stringify(result['modelManager'])==> ${JSON.stringify(result['modelManager'])}`)
  // console.log(`JSON.stringify(result['connectionManager'])==> ${JSON.stringify(result['connectionManager'])}`)
}).catch(err => {
  console.log(`err==> ${err}`)
})

module.exports = app;