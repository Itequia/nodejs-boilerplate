class Deck {

    constructor(id, name, cards = []) {
        Object.assign(this, { 
            id, 
            name,
            cards 
        })
    }
}

module.exports = Deck