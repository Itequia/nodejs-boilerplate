let dbcontext = require('../database/dbcontext')

class DeckService {

    async getAll() {
        try {
            return await dbcontext.find("deck")
        } catch (error) {
            
        }
    }

    async getSingle(id) {
        try {
            return await dbcontext.single("deck", id)
        } 
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = new DeckService()