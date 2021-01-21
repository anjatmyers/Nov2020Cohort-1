/*

  request --> express  --> response 
    middleware = function
  / 
  /about


  [
    fun1, next
    fun2, 
    fun3



  ]
*/

const express = require('express');
const app = express();
const helmet = require('helmet');


/*

[
public ,
helmet,

app.all('/');

[[authLogin, /], /about, /blogs] ->
error
]
*/

//app.use(function(req, res, next){ next()});

//app.use(express.urlencoded({ extended: true }))


// let urlencoded = function(val){

// //
//     return function(req, res, next){
//         next()
//     }
// }

// app.use(function(req, res, next){
//     next()
// })


app.use(express.static('public'));
app.use(helmet())


app.all('/', (req, res, next) => {
  
    
    console.log('log some datat ');
    next();
})

//custom middleware
let authLogin = (req, res, next)=>{

    console.log(`we're checking authentication`);
    next()
}

let home = (req, res, next) => {

    if(true){
        res.send('home')
    }
    else{
        next(new Error('there was an error'))
    }
  
}

app.get('/', authLogin, home)



app.post('/', (req, res) => {
  res.send('post')
})

app.put('/', (req, res) => {
    res.send('put')
  })

app.get('/about', (req, res) => {
  res.send('home')
})

app.use(function(err, req, res, next){

    console.log('here is an error');

    console.log(err.message);

    res.send('there was an error')
})


app.listen(3000, () => {
  console.log('listening on port 3000')
}
)





