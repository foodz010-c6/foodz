const mysql = require("mysql");
const mysqlConfig = require("./dbconfig.js");
const connection = mysql.createConnection(mysqlConfig);

const getMenu = function (callback) {
   var str="SELECT * FROM menu"
   connection.query(str,function(err,result){
       if(err){
           throw err
       }
       callback(result)
   })
};

module.exports = {
  getMenu,
};
