class Card {

    constructor(id, value, suit, deck) {
        Object.assign(this, { 
            id, 
            value, 
            suit, 
            deck 
        })
    }
}

module.exports = Card