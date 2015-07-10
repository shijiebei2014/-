/*
var worker = require('child_process').fork('boknows.js');
*/
var cluster = require('cluster');
cluster.setupMaster({ 
	exec : "boknows.js",
})
var worker =  cluster.fork(); 

worker.on('message', function(e) {
	console.log(e);
});
worker.send('football');
worker.send('baseball');