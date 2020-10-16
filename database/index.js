const mysql = require("mysql");
const mysqlConfig = require("./dbconfig.js");
const connection = mysql.createConnection(mysqlConfig);

const getMenu = function (callback) {
  var str = "SELECT * FROM menu";
  connection.query(str, function (err, result) {
    if (err) {
      throw err;
    }
    callback(result);
  });
};

const insertData = function (callback) {
  var insert = ` INSERT into foodz.order(orderedFood,total,userName,address,phoneNumber,wayOfPayement) VAlUES(2,555,'othman','rue beja',333232,card)`;
  connection.query(insert, function (err, result) {
    if (err) {
      throw err;
    }
    callback(result);
  });
};
module.exports = {
  insertData,
};
module.exports = {
  getMenu,
};
