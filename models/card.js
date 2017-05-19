class Card {

    define (db) {
        db.define("card", { 
            value: String
        })
    }

    associate (db) {
        db.models.card.hasOne("deck", db.models.deck)
    }
}

module.exports = new Card ()