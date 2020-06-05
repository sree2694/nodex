var fs = require('fs')

fs.readFile('Addition.js','utf8',function(err,data){
    console.log(data)
})