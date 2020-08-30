var cntx = document.querySelector("#cntnr");
window.addEventListener("contextmenu", function(e){
	e.preventDefault();
	cntx.style.top = e.offsetY + "px";
	cntx.style.left = event.offsetX + "px";
	cntx.classList.add("active");
});

window.addEventListener("click", function(e){
	var style = cntx.style;
	var rect = cntx.getBoundingClientRect();
	var top = rect.top;
	var height = rect.height;
	var left = rect.left;
	var width = rect.width;
	if(e.offsetY < top){
		cntx.classList.remove("active");
		return;
	} else if(e.offsetY > top+height){
		cntx.classList.remove("active");
		return;
	}
});
