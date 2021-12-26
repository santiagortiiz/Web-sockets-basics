var contador = 0
var allClients = []

// Servidor http
const express = require('express')
const app = express()
const server = require('http').Server(app)

// Middlewares
app.use(express.static('public'))   // Archivos estaticos servidos en la carpeta public

// Web Socket
const io = require('socket.io')(server)     // socket.io exporta una funcion
io.on('connection', function(socket) {
    // allClients.push(socket)
    // console.log(socket)

    console.log('Cliente nuevo')
    socket.emit('mensaje','Bienvenido')
})

setInterval(function(){
    io.emit('mensaje', `Este es el mensaje periodico #${contador}`)
    contador += 1
}, 1000)

server.listen(8080, function() {
    console.log("Servidor escuchando en http://localhost:8080")
})

