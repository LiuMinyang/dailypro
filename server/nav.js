const express = require('express');
const Router = express.Router();
const db = require('./modle');
const cookieParser = require('cookie-parser');



Router.get('/getNavBar',function(req,res){
    db.query("SELECT * FROM `nav_bar`",(err,doc)=>{
        if(doc.length!=0){
            // const navList = [doc.news,doc.job,doc.toDo,doc.dairy,doc.news,doc.novel,doc.personalpic,doc.myMusic,doc.myVedio,doc.myMusic,doc.myMusic,doc.myMusic];
            
            const docArr = doc;
            let navList = [];
            for(let i=0;i<docArr.length;i++){
                navList.push(docArr[i].name)
            }
            console.log(navList)
            return res.json({code:0,data:navList,msg:'请求成功'})
        }else{
            return res.json({code:1,msg:'请求失败'})
        }
        if(err!=null){
            return res.json({code:1,msg:'请求失败，请检查网络'})
        }
    });
})



module.exports = Router;