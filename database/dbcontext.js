const mockSeed = require("./seeds/mock-seed")

class Dbcontext {

    constructor () {
        // Ideally this would connect to a DB and execute the seed methods
        // We will mock the db by executing fake seeds that add mock data.
        this.context = {
            decks: mockSeed.decks,
            cards: mockSeed.cards   
        }
    }

    // This mocks an async get from a real database
    get (entity, where = () => true) {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = this.context[entity] || []
                result = result.filter(where)
                if (result.length) resolve(result)
                else reject("The entity does not exist.")
            }, 1000)
         })
    }
}

module.exports = new Dbcontext()