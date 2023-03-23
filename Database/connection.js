
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');


const  mysql = require('mysql');
const connection  = mysql.createConnection({

$user : 'root',
$pass :'1234A',
$db : 'Season',

});

connection.connect((err) =>{

  if(err)  {
    console.error ("Please wait while we create connection to the database: ", err);
  }else console.log ("Welcome to Seasons Nature Hotel we're glad that were serving you!");
});



module.exports = connection;

