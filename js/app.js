var cntx = document.querySelector("#cntnr");
window.addEventListener("contextmenu", function(e){
	e.preventDefault();
	cntx.style.top = e.offsetY + "px";
	cntx.style.left = event.offsetX + "px";
	cntx.classList.add("active");
});

window.addEventListener("click", function(e){
	mouseEvent = e;
	var style = cntx.style;
	var rect = cntx.getBoundingClientRect();
	var top = rect.top;
	var height = rect.height;
	var left = rect.left;
	var width = rect.width;
	if(!cntx.classList.contains("active")){
		return false;
	}
	if(e.y < top){
		cntx.classList.remove("active");
	} else if(e.y > top+height){
		cntx.classList.remove("active");
	} else if (e.x < left){
		cntx.classList.remove("active");
	}
});
