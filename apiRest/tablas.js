const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'T@ng02021',
    database: "CV",
});

connection.connect(function (err, res) { 
    if (err) console.log(err);

    else console.log("Conectado!");
});

app.use(express.json());

/********************************CREACION DE TABLAS*****************************************/
//let params = [];

// let formaciones = `CREATE TABLE IF NOT EXISTS formacion(id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
//                  titulo VARCHAR(100), 
//                  centro VARCHAR (100),
//                  anyoFin INT(4))`;

// connection.query(formaciones ,params, (err, result) => {

//                      if(err){
//                         console.log(err);
//                      }else{
//                          console.log(result);
//                      }
//  });

// let params = ["MAGISTERIO AUDICIÓN Y LENGUAJE","UNIVERSIDAD DE ALCALÁ DE HENARES",2011];

// let datos = `INSERT INTO formacion (titulo, centro, anyoFin) VALUES (?,?,?)`

// connection.query(datos, params, (err, result) => {
//      if(err){
//          console.log(err);
//      }else{
//          console.log(result);
//      }
// });
/********************************************************************************************** */

// let tecnologias = `CREATE TABLE IF NOT EXISTS tecnologias(id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
//                   nombre VARCHAR(25), 
//                   logo VARCHAR (100),
//                   nivel INT(3))`;

// connection.query(tecnologias ,params, (err, result) => {

//                       if(err){
//                          console.log(err);
//                       }else{
//                           console.log(result);
//                       }
// });

// let params = ["ANGULAR","https://img.icons8.com/color/48/000000/angularjs.png",70];

// let datos = `INSERT INTO tecnologias (nombre, logo, nivel) VALUES (?,?,?)`

// connection.query(datos, params, (err, result) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// });
/************************************************************************************************* */
// let params = [];

// let experiencia = `CREATE TABLE IF NOT EXISTS experiencia(id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
//                   empresa VARCHAR(25), 
//                   puesto VARCHAR (50),
//                   definicion VARCHAR (100),
//                   duracion VARCHAR(25))`;

// connection.query(experiencia ,params, (err, result) => {

//                       if(err){
//                          console.log(err);
//                       }else{
//                           console.log(result);
//                       }
// });

let params = ["CINESA LA GAVIA","GERENTE ADJUNTO","COORDINACIÓN Y FORMACIÓN DEL EQUIPO, CONTROL Y GESTIÓN DEL NEGOCIO","ENERO 2017-FEBRERO 2018"];

let datos = `INSERT INTO experiencia (empresa, puesto, definicion, duracion) VALUES (?,?,?,?)`

connection.query(datos, params, (err, result) => {
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});




  

/*******************************************************************************************/
connection.end();