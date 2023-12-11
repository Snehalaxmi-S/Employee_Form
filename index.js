var con = require('./connection');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post("/",function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var designation = req.body.designation;
    var salary = req.body.salary;
    var dob = req.body.dob;
    var address = req.body.address;
    var phone = req.body.phone;



        var sql = "INSERT into employee_details(name,designation,salary,dob,address,phone,email) VALUES('"+name+"','"+designation+"','"+salary+"','"+dob+"','"+address+"','"+phone+"','"+email+"')";

        con.query(sql,function(error,result){
            if(error) throw error;
            res.redirect('/employees');
        });
});

app.get('/employees',function(req,res){

        var sql = "select * from employee_details";

        con.query(sql,function(error, result){
            if(error) console.log(error);
            res.render(__dirname+"/employees",{employees:result});
        });
   
});

// app.get('/delete-employee',function(req, res){
 

//         var sql = "delete from employee_details where id=?";
//         var id = req.query.id;

//         con.query(sql,[id],function(error, result){
//             if(error) console.log(error);
//             res.redirect('/employees');
//         });
// });
app.listen(7000);