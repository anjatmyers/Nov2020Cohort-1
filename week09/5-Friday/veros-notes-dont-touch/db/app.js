const express = require("express");
const app = express();


//create new database
//config info for database
//learnpgpromise

let config = {
    host: 'localhost',
    port: 5432, 
    database: 'restaurants2020',
    user: 'postgres'
}

let pgp = require('pg-promise')();

//const db = pgp("postgres://username:password@host:port/database");

let db = pgp(config); //database object - gives access to perform CRUD operations

console.log(db);


// db.query(`SELECT * FROM employees.department`)
// .then(records =>{
//     //records = array of objects
//     console.log(records);

//     //console.log(records[1].dept_name);

//     let arr = records.filter(record=>{

//         return record.id == 'd005'
//     })

//     console.log(arr[0].dept_name);
// })
// .catch(error =>{
//     console.log(error);
// })

// db.one(`SELECT * FROM employees.department WHERE id='d005'`)
// .then(result =>{

//     console.log(result);
// })
// .catch(error =>{
//     console.log
//     (error);
// })


// db.result(`INSERT INTO categories VALUES (DEFAULT, 'Nigerian');`)
// .then(result =>{
//     console.log(result);
// })

//let cat = req.body.id

db.result(`INSERT INTO categories VALUES (DEFAULT, $1)`, ['Romanian'])
.then(result =>{
    console.log(result);
})


app.listen(3000, (req, res) => {
  console.log(`listening on port 3000`);
});


