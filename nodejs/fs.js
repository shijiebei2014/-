var fs = require('fs');
var content = "";
/*
//同步
fs.readdirSync( __dirname ).filter( function( fileName ){ 
	return fs.statSync( fileName ).isFile();
} ).forEach( function( fileName ){ 
	content += fileName + "\n";
} );
*/

/*
//异步
fs.readdir( __dirname, function( err, fileNames){ 
	if( err ){
		console.log( err.message ); 
		return ;
	}
	function readFileAt( i ){ 
		fs.stat( fileNames[i], function( err, stat ){ 
			if( err ){ console.log( err.message ); return; };
			console.log( fileNames[i] +  ":" + stat.isFile() );
			if( !stat.isFile() ){ 
				return i + 1 < fileNames.length ? readFileAt( i + 1 ) : console.log( content );;
			}

			fs.readFile( fileNames[i], function( err, data){ 
				if( err ){ console.log( err.message ); return; };
				content += data.toString();

				if( i + 1 < fileNames.length ){ 
					readFileAt( i + 1 );
				}
				console.log( content );
				return ;
			} );
		} );
	};
	readFileAt( 0 );
});
*/

/*
var async = require( './lib/async/lib/async.js' );
var fileNames = fs.readdirSync( __dirname );

async.filter( fileNames, isFile, function( fileNames ){ 
	async.forEachSeries( fileNames, concatFileContent, onComplete );
} );

function isFile( fileName, cb ){ 
	fs.stat( fileName, function( err, stat ){ 
		if( err ){ throw err; };
		cb( stat.isFile() );
	} );
}

function concatFileContent( fileName, cb ){ 
	fs.readFile( fileName, function( err, data){ 
		if( err ){ cb( err ); };
		content += data.toString();
		cb();
	} );
}

function onComplete( err ){ 
	if( err ){ console.log( err.message ); return ; };

	console.log( content );
}
*/

function bar(){ 
	console.log("window bar");
}

function host(){ 
	console.log( typeof bar );

	/*
	var bar = function(){ 
		console.log("local bar");
	};
	*/
}

//host();

function a(){ 
		var b = "hello";
		console.log( b );
		var b = 123;
   	}
   	a();