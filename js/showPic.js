function showPic (whichpic) {
		if(!document.getElementById("placeholder")) return false;
		var source = whichpic.getAttribute("href");//获取这个节点的href属性
		var placeholder = document.getElementById("placeholder");
		if(placeholder.nodeName!="IMG")return false;
		placeholder.setAttribute("src",source);
		//placeholder.src = source;
		if(document.getElementById("description")){
			var text1 = whichpic.getAttribute("title") ?whichpic.getAttribute("title") :"" ;
			var description = document.getElementById("description");
			if(description.childNodes[0].nodeType == 3){
				description.childNodes[0].nodeValue = text1;
			}
		}
		return true;
	}
function countBodyChildren () {
	var nodetype,nodevalue,nodename;
	var body_element = document.getElementsByTagName("body")[0].childNodes;
	console.log(body_element.length);
	for(var i = 0;i<body_element.length;i++){
		nodetype = body_element[i].nodeType;
		nodevalue = body_element[i].nodeValue;
		nodename = body_element[i].nodeName;
		console.log(nodename+"~"+nodevalue+"~"+nodetype);
	}
}
function popUp(winURL){
	window.open(winURL,"popup","width=320,height=480");
	
}
function prepareLinks(){
	 var links = document.getElementsByTagName("a");
	 for(var i=0;i<links.length;i++){
	 	if(links[i].getAttribute("class") == "popup"){
	 		links[i].onclick = function(){	 		
	 			popUp(this.getAttribute("href"));
	 			return false;
	 		}
	 		
	 	}
	 }
}

function prepareGallery(){	
	if(!document.getElementsByTagName||!document.getElementById) return false;
	if(!document.getElementById("imagegallery"))return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			return !showPic(this);
			/*showPic(this);
			return false;*/
		}
		/*links[i].onkeypress = links[i].onclick;*/
	}
}

function addLoadEvent (func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
window.onload = function(){//页面加载时调用
	countBodyChildren();
	prepareLinks();
	prepareGallery();
}
