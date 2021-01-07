
const express = require('express');
const app = express();

app.use(express.static('public'));

//subroutes

app.use(require('./routes/index'))



app.get('/about', (req, res) => {
  
    res.send(`
    
    <link rel="stylesheet" href="css/global.css">
    <h1>About us page</h1>
     
    `)
})

app.get('/cats?', (req, res) => {
  
    res.send('<h1>Cats are great</h1>')
})

app.get('/dogs?', (req, res) => {
  
    res.send('<h1>Dogs are the best!</h1>')
})

app.get('/bat(wo)*man', (req, res) => {
  
    //batman
    //batwoman
    //batwowowoman
    res.send('<h1>Batman</h1>')
})

// app.get('/contact', (req, res) => {
  
//     let userName = req.param('name')

//     console.log(userName);

//     res.send(`<h1>Hello there ${userName}</h1>`)
// })


app.get('/contact/:name', (req, res) => {
  
    let userName = req.params.name

    console.log(userName);

    res.send(`<h1 style="color: red">Hello there ${userName}</h1>`)
})

//{data: [{}, {}]}
//id
// data.data[1].img
let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}

app.get('/api', (req, res) => {
  
    //Content-type application/json
    res.json(data)
})

//  /dogs/2

app.get('/dogs/:id', (req, res) => {
  
    let id = req.params.id;

    //data.data[id].name, data.data[id].img
    res.send(`

        <h1>${data.data[id].name}</h1>
    
        <ul>

            <li> <a href="/dogs/0">${data.data[0].name}</a> </li>
            <li> <a href="/dogs/1">${data.data[1].name}</a> </li>
            <li> <a href="/dogs/2">${data.data[2].name}</a> </li>
            <li> <a href="/dogs/3">${data.data[3].name}</a> </li>
        </ul>
    
        <img height="300px" src="${data.data[id].img}"  >
    
    `)

})







// /calculate/4/5/
app.get('/flights?/:from/:to', (req, res) => {
  
     res.send(`Departing from: ${req.params.from} Arriving at: ${req.params.to} `)
})

app.listen(3000, ()=>{
    console.log('Running on port 3000');
})
