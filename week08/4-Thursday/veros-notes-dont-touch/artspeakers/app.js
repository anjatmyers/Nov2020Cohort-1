const express = require("express");

const app = express();
//const io = require('socket.io')();
const socket = require('socket.io');
//const reload = require('reload');


//ejs
app.set("view engine", "ejs");

//public
app.use(express.static("public"));

//route references
app.use(require("./routes/index"));
app.use(require("./routes/speakers"));
app.use(require("./routes/feedback"));
app.use(require("./routes/api"));
app.use(require("./routes/chat"));

let server = app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
//io.attach(server)
let io = socket(server);

io.on('connection', (socket)=>{

  //listening for messages from client
  socket.on('postMessage', (msg)=>{

    console.log(msg);
    //broadcast to all connected servers
    io.emit('updateMessages', msg)
  })
})
//reloads pages
//reload(server, app);




