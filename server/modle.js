const mysql = require('mysql');
// ----刘明阳----链接mysql--------------
const db = mysql.createConnection({host:'localhost',user:'root',password:'lmy125432',port:'3306',database:'myproject'});
// ------刘明阳----查询---------------
// db.query("SELECT * FROM `user_table`",(err,data)=>{
    // if(err){
    //     console.log('出错了',err)
    // }else{  
    //     data = JSON.stringify(data)
    //     console.log("成功了")
    // }
// });

// db.query("SELECT * FROM `nav_bar`",(err,data)=>{
//     if(err){
//         console.log('出错了',err)
//     }else{  
//         data = JSON.stringify(data)
//         console.log(data)
//         console.log("成功了")
//     }
// });

module.exports = db;
