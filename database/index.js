const mysql = require("mysql");
const mysqlConfig = require("./dbconfig.js");
const connection = mysql.createConnection(mysqlConfig);
const saveOrder = function (data, callback) {
  var str=`INSERT INTO foodz.order (orderedFood,total,userName,adress,phoneNumber) VALUES("${data.ordredFood}","${data.total}","${data.name}","${data.adress}","${data.phone}" )`
  connection.query(str,function(err,result){
      if(err){
          throw err
      }
      callback(null,result)
  })
};

const getMenu = function (callback) {
  var str = "SELECT * FROM menu";
  connection.query(str, function (err, result) {
    if (err) {
      throw err;
    }
    callback(result);
  });
};


module.exports = {
  getMenu,
  saveOrder
};
