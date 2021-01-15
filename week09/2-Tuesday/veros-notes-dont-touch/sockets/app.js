const express = require('express');
const app = express();
const socket = require('socket.io');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  
    res.render('index')
})

let server = app.listen(3000, () => {
  
    console.log(`listening on port 3000`);
});

let io = socket(server);

io.on('connection', (socket)=>{

    //this message will broadcast out to each connected client 
    console.log('client conntected');
    
    socket.emit('chatMessage', {msg: "Hello from our backend"});

    socket.on('msgFromClient', (msgClient)=>{

        console.log(msgClient);
        
        //broadcasting out to all connected clients
        io.emit('msgFromServer', msgClient)

    })

})
