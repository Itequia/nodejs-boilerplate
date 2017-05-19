const   fs = require("fs"),
        controllerExtension = ".js"

fs.readdirSync(__dirname + '/').forEach( file => {
    if (file === 'index.js') return
    let name = file.replace(controllerExtension, "")
    exports[name] = require('./' + file)
})