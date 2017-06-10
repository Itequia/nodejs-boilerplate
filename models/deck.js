class Deck {
    
    define (db) {
        db.define("deck", { 
            name: String
        })
    }

    associate (db) {
    }
}

module.exports = new Deck ()