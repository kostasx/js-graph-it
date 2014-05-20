var ulElement = document.getElementById("menu");

onLoad();

function onLoad() {
	createMenu();
	setMenu();
	resizeCanvas();
	initPageObjects();
}

//  RESIZE CANVAS TO MAXIMUM HEIGHT SIZE
function resizeCanvas(){
	var divElement = document.getElementById("mainCanvas");
	var screenHeight = window.innerHeight || document.body.offsetHeight;
	divElement.style.height = (screenHeight - 16) + "px";
}

function createMenu() {
  for ( var i = menuItems.length - 1; i >= 0; i-- ) {
		var itemMenuLink 	  	   = document.createElement("a");
			itemMenuLink.href 	   = menuItems[i][1];
			itemMenuLink.innerText = menuItems[i][0]; 
		var itemMenu 	 		   = document.createElement("li");
			itemMenu.appendChild(itemMenuLink); 
			ulElement.appendChild( itemMenu );
	};

}

 // SET ACTIVE MEMU SCANNING FOR A MENU ITEM WHICH URL IS A PREFIX 
 // OF THE CURRENT PAGE IGNORING FILE EXTENSION
function setMenu() {
	var url = document.location.href;
		url = stripExtension(url);
	var links = ulElement.getElementsByTagName("A");
	var i;
	for(i = 0; i < links.length; i++) {
		if(url.indexOf(stripExtension(links[i].href)) == 0)
		{
			links[i].className = "active_menu";
			return;
		}
	}
}

// STRIP FILE EXTENSION AND EVERYTHING AFTER A URL
function stripExtension(url) {
	var lastDotPos = url.lastIndexOf('.');
	if(lastDotPos > 0)
		return url.substring(0, lastDotPos - 1);
	else
		return url;
}

 // OPEN POPUP TO SHOW SAMPLES DURING EXPLANATIONS
function openSample(url) {
	var popup = window.open(url, "sampleWindow", "width=400,height=300");
	popup.focus();
	return false;
}
