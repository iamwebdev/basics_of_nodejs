const fs = require('fs')
fs.readFile(__dirname+'/data.txt','utf8', function(err, data) {
    if (!err) 
        console.log(data)
});
console.log('File ended executes first')