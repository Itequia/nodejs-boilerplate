const   deckService = require("../services/deck.service"),
        httpResult = require("../utils/httpResult")

class DeckController {

    async getAll(req, res, next) {
        try {
            let response = await deckService.getAll()
            return httpResult.ok(res, response)
        }
        catch(e) {
            // Ideally, we would have a different error for each problem, 
            // and we could infer here the status/message to show in every one of them.
            // Since we do not have a real db, the only error that could happen is a not found
            let err = { status: 404, message: e }
            return httpResult.error(res, err)
        }
    }

    async getSingle(req, res, next) {
        try {
            let response = await deckService.getSingle(req.params.id)
            return httpResult.ok(res, response)
        }
        catch(e) {
            // Ideally, we would have a different error for each problem, 
            // and we could infer here the status/message to show in every one of them.
            // Since we do not have a real db, the only error that could happen is a not found
            let err = { status: 404, message: e }
            return httpResult.error(res, err)
        }
    }
}

module.exports = new DeckController()