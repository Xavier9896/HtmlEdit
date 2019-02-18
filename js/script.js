/*文本框显示行号*/
String.prototype.trim2 = function()
{
	'use strict';
	return this.replace(/(^\s*)|(\s*$)/g, "");
};
function G(objid){
	'use strict';
	return document.getElementById(objid);
}
/*文本框显示行号*/
var num="";
function keyUp(){
	'use strict';
	var obj=G("sourcecode");
	var str=obj.value;
	str=str.replace(/\r/gi,"");
	str=str.split("\n");
	var n=str.length;
	line(n);
}
function line(n){
	'use strict';
	var lineobj=G("li");
	for(var i=1;i<=n;i++){
		if(document.all){
			num+=i+"\r\n";
		}else{
			num+=i+"\n";
		}
	}
	lineobj.value=num;
	num="";
}
function autoScroll(){
	'use strict';
	var nV = 0;
	if(!document.all){
		nV=G("sourcecode").scrollTop;
		G("li").scrollTop=nV;
		setTimeout(autoScroll,20);
	}
}
if(!document.all){
	window.addEventListener("load",autoScroll,false);
}
