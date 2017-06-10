const   fs = require("fs"),
        controllerExtension = ".controller.js",
        nameReplace = 'Controller'

fs.readdirSync(__dirname + '/').forEach( file => {
    if (file === 'index.js') return
    let name = file.replace(controllerExtension, nameReplace) 
    exports[name] = require('./' + file)
})