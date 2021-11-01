const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const server = app.listen(4000, () => {
  console.log('listening to requests on port 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', function (socket) {
  console.log('made socket connection', socket.id);
});