let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'college'
});
connection.connect(function(err) {
    if (err) {
        return console.error("error" + err.message);
    }
    console.log("Connected to MYSQL server")
});
connection.end(function(err) {
    if (err) {
        return console.log("Error:" + err.message);
    }
    console.log("Closing the database connection");
});