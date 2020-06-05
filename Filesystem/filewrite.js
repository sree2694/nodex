var fs = require('fs')

fs.writeFile('sample.js','console.log("done")',function(err){
    console.log("Data Saved")
})