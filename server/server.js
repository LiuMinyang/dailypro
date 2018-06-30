const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const userRouter = require('./user');
const navRouter = require('./nav');
const app = express();


app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user',userRouter);
app.use('/nav',navRouter);


app.listen(9093,function(){
    console.log("请求成功")
})


