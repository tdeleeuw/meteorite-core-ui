var appRouter = function(app) {
	app.get('/', function(req, res) {
		res.send('Hello World!!');
	});

	app.get('/account', function(req, res) {
		var accountMock = {
			username: 'breno',
			password: '1234',
			twitter: '@brenopolanski'
		};

		if (!req.query.username) {
			return res.send({ 'status': 'error', 'message': 'missing username' });
		}
		else if (req.query.username !== accountMock.username) {
			return res.send({ 'status': 'error', 'message': 'wrong username' });
		}
		else {
			return res.send(accountMock);
		}
	});
};

module.exports = appRouter;