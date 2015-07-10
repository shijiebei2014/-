var Event = require('events').EventEmitter;
var event = new Event();

event.on('message', function(){ 
	console.log("haha");
	event.emit( 'message' );
});
//递归执行,栈溢出
event.emit( 'message' );