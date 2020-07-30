var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dirPath = path.join("public/pdf", "JieruiPeng_Resume.pdf");
const fs = require("fs");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutMeRouter = require('./routes/aboutMe');
const educationRouter = require('./routes/education');
const experiencesRouter = require('./routes/experiences');
const publicationsRouter = require('./routes/publications');
const certificatesRouter = require('./routes/certificates');
const resumeRouter = require('./routes/resume');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/aboutMe', aboutMeRouter);
app.use('/education', educationRouter);
app.use('/experiences', experiencesRouter);
app.use('/certificates', certificatesRouter);
app.use('/publications', publicationsRouter);
app.use('/resume', resumeRouter);


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

//==========

module.exports = app;
