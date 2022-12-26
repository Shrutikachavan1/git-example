console.log('Getting_Started');
const log = require('./module')
const http = require('http')
const port = 4000
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('Hello World ')
    res.end('Helo')
}).listen(port)
log.info('this is info')
log.warn('this is warn')
log.error('this is error')