const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

let port = process.env.PORT || 300;

let connection = mysql.createConnection({
    host: "database-1.cxoou8blftez.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: 'Tang02021',
    database: "cv",
});

connection.connect(function (err, res) { 
    if (err) console.log(err);
    else console.log("Conectado!");
});

app.use(express.json());
app.use(cors());

/**********************************************************************/

app.get('/formacion', (req, res) => {    
    
    let sqlAll = `SELECT * FROM formacion`;
    let id = req.query.id;

    connection.query(sqlAll, id, (err, result) => {
        
        if(err){

            console.log(err);
            res.send(err);

        }else if(result){

            res.json(result);

        }else{

            res.json({error: true, codigo: 200, mesaje: 'OK!'}); 
        }
    });
    
});

app.get('/tecnologias', (req, res) => {    
    
    let sqlAll = `SELECT * FROM tecnologias`;
    let id = req.query.id;

    connection.query(sqlAll, id, (err, result) => {
        
        if(err){

            console.log(err);
            res.send(err);

        }else if(result){

            res.json(result);

        }else{

            res.json({error: true, codigo: 200, mesaje: 'OK!'}); 
        }
    });
    
});

app.get('/experiencia', (req, res) => {    
    
    let sqlAll = `SELECT * FROM experiencia`;
    let id = req.query.id;

    connection.query(sqlAll, id, (err, result) => {
        
        if(err){

            console.log(err);
            res.send(err);

        }else if(result){

            res.json(result);

        }else{

            res.json({error: true, codigo: 200, mesaje: 'OK!'}); 
        }
    });
    
});





/*****************************************************************************************/
// set port, listen for requests
app.listen(port, () => {
    console.log("Server is running on port 300.");
});