const   dotenv = require('dotenv'),
        express = require('express'),
        path = require('path'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
        compress = require('compression'),
        http = require('http')

const   router = require('./router'),
        httpResult = require('./utils/httpResult')

const   oneYearInMs = 31536000000

class Server {

    constructor() {
        this.init()
    }

    init () {
        this.app = express()
        // Adding global config vars
        dotenv.config()
        // Adding Gzip
        this.app.use(compress())
        // Adding parsers
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(cookieParser())
        // Adding static server with cache-control
        this.app.use(express.static(path.join(__dirname, 'public'), { maxAge: oneYearInMs }))
        // Adding API routes
        this.app.use('/api', router)
        // Adding error handling
        this.app.use( (req, res, next)  => httpResult.notFound(res) )
    }

    start (port = 3000) {
        // Adding app port & starting server
        this.app.set('port', port)    
        let server = http.createServer(this.app)
        server.listen(port)
        server.on(
            'listening', 
            () => console.log(`Listening on ${ server.address().port || server.address() }`)
        )
    }
}

module.exports = Server