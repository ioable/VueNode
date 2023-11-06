var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const UserRouter = require('./routes/admin/UserRouter');//用户接口
const NewsRouter = require('./routes/admin/NewsRouter')
const ProductRouter = require('./routes/admin/ProductRouter')
const webNewsRouter = require('./routes/web/NewsRouter')
const webProductRouter = require('./routes/web/ProductRouter')
const JWT = require('./util/JWT');

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

/*
adminApi  后台系统用
webApi   企业官网用
*/ 
app.use(webNewsRouter)//官网不用做后台校验
app.use(webProductRouter)//官网产品


app.use((req,res,next)=>{
  //如果token有效，next（）
  //token过期，返回404
    /*
    首先排除登录接口(因为登录接口没有token)
  */
  if(req.url==="/adminApi/user/login"){
    next()
    return;
  }

  const token = req.headers["authorization"].split(" ")[1]
  if(token){//保持token的有效性(只要10s内一直刷新，token就有效)
    var payload = JWT.verify(token)
    if(payload){
      const newToken = JWT.generate({
        _id:payload._id,
        username:payload.username
      },"1d")
      res.header("authorization",newToken)
      next()
    }else{
      res.status(401).send({errCode:"-1",errorInfo:"token过期"})
    }
  }
  // next()
})
//注册调用
app.use(UserRouter)
app.use(NewsRouter)
app.use(ProductRouter)

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

module.exports = app;
