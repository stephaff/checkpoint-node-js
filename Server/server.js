const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello Node!!!!</h1>\n')
})

server.listen(3000)