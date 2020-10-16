const mysql = require("mysql");
const mysqlConfig = require("./dbconfig.js");
const connection = mysql.createConnection(mysqlConfig);
// const saveOrder = function (data, callback) {
//   var str="INSERT into foodz.order (orderedFood,total,userName,adress,phoneNumber) values() "
     
//   connection.query(str,function(err,result){
//       if(err){
//           throw err
//       }
//       callback(result)
//   })
// };

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
  // saveOrder
};
