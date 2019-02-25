
// const app = require('express')();
const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
app.use(cors());





app.get('/student', function (req, res) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'students'
    });

    connection.connect();


    connection.query('SELECT * from students', function (error, results, fields) {
        connection.end();      
        if (error) throw error;
 
        res.send(results);
    });


});

app.post('/', function (req, res) {
    res.send('post home');
});



app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});
