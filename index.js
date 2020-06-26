let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tejaswini@21',
    database: 'college'
});
connection.connect(function(err) {
    if (err) {
        return console.log("error");
    }
    console.log("Connected to MYSQL server")
});