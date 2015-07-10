var moment = require("./lib/moment/moment.js");

//相对时间
/**
* fromNow(),表示相对于现在
* endOf:  相当于设置moment到最后,如moment("20111031", "YYYYMMDD").endOf('year'),表示2011年+1年 - 1天
* startOf:相当于设置moment到开始,如moment("20111031", "YYYYMMDD").startOf('year'),表示2011年-1年 + 1天

*/

/*
var time = moment("20111031", "YYYYMMDD").fromNow();
//console.log( time );

//console.log( moment("20111031", "YYYYMMDD").endOf('year') );
//console.log( moment("20111031", "YYYYMMDD").endOf('year').fromNow() );

console.log( moment().startOf('day') );
//console.log( moment().endOf('day').calendar ());
time = moment().startOf('day').fromNow();//相对于现在的00:00:00开始,过了几个小时
console.log( time );

console.log( moment().endOf('day').fromNow() );//相对于现在的23:xx:xx开始,还需几个小时

console.log( moment().startOf('hour').fromNow() );//相对于现在的xx:00:00开始,过了几分钟

console.log( moment().endOf('hour').fromNow() );//相对于现在的xx:59:59开始,还需几分钟

console.log( moment().subtract(10, 'days').calendar() );

console.log( moment("12-25-1995", "MM-DD-YYYY") );


var start  = moment().startOf('week').add(1, 'days');//以周末开始
console.log( start );
var end    = moment().endOf('week').add(1, 'days');//以周六结束
console.log( end );
var actual = moment().min(start).max(end);
console.log( actual );
*/

function type( obj ) {	
	var DATETAG   = "date类型";
	var STRINGTAG = "string类型";
	var MOMENTTAG = "moment类型";
	
	if ( typeof obj == "string" ){	
		return STRINGTAG;
	} else {	
		if ( obj instanceof Date ){	
			return DATETAG;
		}
		return MOMENTTAG;		
	}
}

function format ( obj ) {
	console.log( type( obj ) + "," + obj );
}
console.log( "日期+时间解析开始.........." );
format( new moment().format( "YYYY-MM-DD" ) );
format( new moment( "2015-06-07" ).format( "Q-MM-DD" ) );//Q:将以月来划分4个季度,表示第几个季度
format( new moment( new Date() ).format( "YYYY-MM-DD" ) );
format( new moment( new Date() ).format( "YYYY-MMM-DD" ) );//MMM,表示将月份已英文字母的前三个字符表示;MMMM,表示前4个字符
format( new moment( new Date() ).format( "YYYY-MMM-Do" ) );
format( new moment( new Date() ).format( "YYYY-MMM-DDD" ) );//DDD,表示日是一年中的第几天,以3位来表示;DDDD,表示用4位来表示

console.log( "日期+时间解析结束.........." );

//moment是Date的包装类,相当于moment,Date,和String,这三个之间的相互转化
//String-->mement; Date --> moment; moment --> String; monment --> Date (toDate)