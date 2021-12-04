const http = require('http').createServer();
const io = require('socket.io')(http, {cors: {origin: '*'}});


io.on('connection', (socket) => {
    socket.on('my-custom-message', message => {
        console.log(message);
        io.emit('my-custom-message', message)
    })
});

http.listen(8080, _ => console.log('listening on http://127.0.0.1:8080/'))