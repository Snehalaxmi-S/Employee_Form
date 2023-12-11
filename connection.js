var mysql = require("mysql");

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"employee"
});

module.exports = con;
