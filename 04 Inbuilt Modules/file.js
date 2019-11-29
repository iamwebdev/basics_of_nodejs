const fs = require('fs');
fs.readFile(__dirname+'/data.txt','utf8',(err,data) => {
    if(!err)
        console.log(data)
})