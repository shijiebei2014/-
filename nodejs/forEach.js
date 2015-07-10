
[1,2,3,4].forEach( function( ele ){ 
	process.on( 'exit', function(){ 
		/**
		*闭包,ele是闭包域中的变量
		*等程序运行完之后,ele还是之前的值
		*/
		console.log( ele );
	} );
} );

for( var i = 0; i < 4; i++ ){ 
	process.on( 'exit', function(){ 
		/**
		*闭包,i是闭包域中的变量
		*等程序运行完之后,i变量就变成4了
		*/
		console.log( i );
	} );
}
