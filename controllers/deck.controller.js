const   deckService = require("../services/deck.service"),
        httpResult = require("../utils/httpResult")

class DeckController {

    async getAll (req, res, next) {
        try {
            let response = await deckService.getAll()
            return httpResult.ok(res, response)
        }
        catch (e) {
            let err = { status: 404, message: e }
            return httpResult.error(res, err)
        }
    }

    async getSingle (req, res, next) {
        try {
            let response = await deckService.getSingle(req.params.id)
            return httpResult.ok(res, response)
        }
        catch (e) {
            let err = { status: 404, message: e }
            return httpResult.error(res, err)
        }
    }

    async create (req, res, next) {
        try {
            let response = await deckService.create(req.body.deck)
            return httpResult.ok(res, response)
        }
        catch (e) {
            let err = { status: 404, message: e }
            return httpResult.error(res, err)
        }
    }
}

module.exports = new DeckController()