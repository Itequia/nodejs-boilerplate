const orm = require("orm")

const models = require("../models")

class Dbcontext {

    constructor () {
        this.init()
    }

    init () {
        orm.connect (process.env.DB_CONNECTION_STRING, (err, db) => {
            if (err) return console.error(err)
            console.log(" -- DATABASE CONNECTED SUCCESSFULLY -- ")

            for(let model in models) models[model].define(db)
            for(let model in models) models[model].associate(db)

            db.sync(err => {
                if (err) return console.error(err)
                db.models.deck.create({ name: "Hello world!" }, err => err && console.error(err))
            })
        })
    }
}

module.exports = new Dbcontext()