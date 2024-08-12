const app = require('./app')

const http = require('http')

const server = http.createServer(app)
port = 5000

server.listen(port,console.log('app is running....'))
