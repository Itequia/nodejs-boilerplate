let dbcontext = require('../database/dbcontext')

class DeckService {

    async getAll () {
        return await dbcontext.find("deck")
    }

    async getSingle (id) {
        return await dbcontext.single("deck", id)
    }

    async create (deck) {
        return await dbcontext.create("deck", deck)
    }
}

module.exports = new DeckService()