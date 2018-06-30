const express = require('express');
const Router = express.Router();
const db = require('./modle');
const cookieParser = require('cookie-parser');



Router.post('/login',function(req,res){
    const {username,password} = req.body;
    db.query("SELECT * FROM user_table where username='"+username+"' and password='"+password+"'",(err,doc)=>{
       console.log(err)
       if(doc.length!=0){
        return res.json({code:0,data:doc,msg:''})
       }else{
            return res.json({code:1,msg:'用户名或密码错误'})
       }
       if(err!=null){
        return res.json({code:1,msg:'请检查网络'})
       }
    });
})



module.exports = Router;