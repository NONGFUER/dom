function preparePlaceholder(){
//创建一个img元素节点
var placeholder = document.createElement("img");
//设置这个节点的id属性
placeholder.setAttribute("id","placeholder");
//设置这个节点的src属性
placeholder.setAttribute("src","../img/gallery/0.png");
//设置这个节点的alt属性
placeholder.setAttribute("alt","my image gallery");
//创建一个p元素
var description = document.createElement("p");
//设置这个节点的id属性
description.setAttribute("id","description");
//创建一个文本节点
var desctext = document.createTextNode("Choose an image");
//把这个文本节点追加到p元素上
description.appendChild(desctext);
//把p元素和img元素插入到文档
document.getElementsByTagName("body")[0].appendChild(placeholder);
/*document.body.appendChild().appendChild(placeholder);*/
document.getElementsByTagName("body")[0].appendChild(description);
/*document.body.appendChild().appendChild(description);*/
var gallery = document.getElementById("imagegallery");
gallery.parentNode.insertBefore(placeholder,gallery);
gallery.parentNode.insertBefore(description,gallery);
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	//检查目标元素是不是parent的最后一个元素
	if(parent.lastChild === targetElement){
	//如果是将新元素追加到parent元素上
		parent.appendChild(newElement);
	}else{
	//如果不是，将新元素追加到目标元素的紧邻的兄弟元素之前
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
window.onload = function(){
	preparePlaceholder()
}
