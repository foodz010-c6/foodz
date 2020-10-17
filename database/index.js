const mysql = require("mysql");
const mysqlConfig = require("./dbconfig.js");
const connection = mysql.createConnection(mysqlConfig);

const getUsers = function (callback) {
  var str = "SELECT * FROM user";
  connection.query(str, function (err, result) {
    if (err) {
      throw err;
    }
    callback(result);
  });
};


const saveUser = function (data, callback) {
  var str=`INSERT INTO user (userName,email,mdp) VALUES("${data.user}","${data.email}","${data.mdp}" )`
  connection.query(str,function(err,result){
      if(err){
          throw err
      }
      callback(null,result)
  })
};



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
  saveOrder,
  getUsers,
  saveUser
};
