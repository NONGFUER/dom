//
function s1(){
	alert("外");
	
}
function s2(){
	alert("里");
	
}
function s3(){
	alert("lili");
	var e = window.event;
	if(e.stopPropagation()){
		e.stopPropagation()
	}
	
}
