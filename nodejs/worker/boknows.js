process.on('message', function(e) {
	process.send('Bo knows ' + e);
});