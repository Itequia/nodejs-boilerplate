const   Deck = require("../../models/deck")
        Card = require("../../models/card")

class MockSeed {

    constructor() {
        this.id = 0
        this.setDeckMockData()
        this.setCardMockData()
    }    
    
    setDeckMockData() {
        this.decks = [
            new Deck(this._getNextId(), "English Deck")
        ]
    }

    setCardMockData() {
        this.cards = []

        // English Deck
        for (let suit of ["♣", "♦", "♥", "♠"]) {
            for (let value of [ "2","3","4","5","6","7","8","9","10","J","Q","K","A" ]) {
                this.cards.push( new Card (           
                    this._getNextId(), 
                    value, 
                    suit, 
                    this.decks[0].id
                ))
            }
        }
    }

    _getNextId() {
        return ++this.id
    }
}

module.exports = new MockSeed()