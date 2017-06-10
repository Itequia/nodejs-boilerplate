const orm = require("orm")

const models = require("../models")

class Dbcontext {

    constructor () {
        this.init()
    }

    init () {
        orm.connect (process.env.DB_CONNECTION_STRING, (err, db) => {
            if (err) return console.error(err)
            console.log("- Database connected successfully")

            /* Getting models and creating the relationships */
            for(let model in models) models[model].define(db)
            for(let model in models) models[model].associate(db)

            /* Syncing the db & creating tables */
            db.sync(err => {
                if (err) return console.error(err)
                this.db = db
            })
        })
    }

    // add (model, ) {

    // }

    // delete(model, ) {

    // }

    // update () {

    // }

    find (model, where = {}) {
        return this._executeAsPromise("find", model, where)
    }

    single (model, id) {
        return this._executeAsPromise("get", model, id)
    }

    /* 
        Executes ORM method using promises instead of the default callbacks 
    */
    _executeAsPromise (method, model, params) {
        return new Promise((resolve, reject) => {
            if(!this.db) reject("DB_ERROR")
            this.db.models[model][method](params, (err, result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
}

module.exports = new Dbcontext()