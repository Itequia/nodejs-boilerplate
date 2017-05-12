let dbcontext = require('../database/dbcontext')

class DeckService {

    async getAll() {
        return await dbcontext.get("decks")
    }

    async getSingle(id) {
        let decks = await dbcontext.get("decks", a => a.id == id)
        return decks[0] 
    }
}

module.exports = new DeckService()