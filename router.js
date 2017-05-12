const 	express = require('express'),
		appPackage  = require('./package.json'),
		httpResult  = require('./utils/httpResult'),
		{ deckController } = require('./controllers')

class Router {

	constructor() {
		this.router = express.Router()
		this.registerRoutes()
	}

	registerRoutes () {
		/* GET API info. */
		this.router.get(
			'/',
			(req, res) => httpResult.ok(res, 'Welcome to this node api v' + appPackage.version)
		)

		/* DECKS */
		this.router.route('/decks')
			.get(deckController.getAll)
		this.router.route('/decks/:id')
			.get(deckController.getSingle)
	}
}

module.exports = new Router().router


// /*Auth */
// router.post('/login', ctrl.auth.login)

// /* Projects */
// router.route('/projects')
// 	.get(ctrl.projects.getAll)
// 	.post(ctrl.auth.authenticate, ctrl.projects.post)
// router.route('/projects/:id')
// 	.get(ctrl.projects.getSingle)
// 	.put(ctrl.auth.authenticate, ctrl.projects.put)
// 	.delete(ctrl.auth.authenticate, ctrl.projects.delete)

// /* Articles */
// router.route('/articles')
// 	.get(ctrl.articles.getAll)
// router.route('/articles/:id')
// 	.get(ctrl.articles.getSingle)

// /* Not found, for every other route */
// router.all('*', (req, res) => httpResult.notFound(res))

