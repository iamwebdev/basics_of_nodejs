var http = require('http')

http.createServer(function(req,res){
    res.write('Server is running properly')
    res.end()
}).listen(3000,()=>console.log('Server start listening'))