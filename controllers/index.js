const   fs = require("fs"),
        controllerExtension = ".controller.js"

fs.readdirSync(__dirname + '/').forEach( file => {
    if (file === 'index.js') return
    let name = file.replace(controllerExtension, '') + "Controller"
    exports[name] = require('./' + file)
})