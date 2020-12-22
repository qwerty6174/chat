var express = require('express');
const cors = require('cors');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(cors())
app.use(express.json())

const users = [];
const messages = [];

app.get('/', (req, res) => {
  res.json(users);
});

app.post('/', (req, res) => {
  res.send()
});

io.on('connection', (socket) => {

  socket.on("ROOM:JOIN",({user})=>{
    const pushData ={
      avatar:user.avatar,
      fullname:  user.fullname,
      socket_id: socket.id
    }
   users.push(pushData);
  socket.broadcast.emit("ROOM:JOINED",users);
  io.sockets.emit("ROOM:NEW_MESSAGE",messages)
  })
  
  socket.on("ROOM:NEW_MESSAGE",({message})=>{
    const pushData ={
      author:{avatar: message.avatar,fullname: message.fullname},
      text:  message.text,
      date: message.date
    }
   messages.push(pushData);
  io.sockets.emit("ROOM:NEW_MESSAGE",messages)
  })

  socket.on("disconnect",()=>{
    const index = users.findIndex(n => n.socket_id === socket.id);
    if (index !== -1) {
      users.splice(index, 1);
    }
    socket.broadcast.emit("ROOM:DICONNECTED",users);
    });
});


http.listen(8888, () => {
  console.log('listening on *:3000');
});