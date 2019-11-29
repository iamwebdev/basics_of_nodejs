const fs = require('fs')
try {
    var data = fs.readFileSync(__dirname+'/data.txt','utf8'); 
    console.log(data)    
} catch(err) {
    console.log(err)
}
console.log('File ended executes sequentilly')