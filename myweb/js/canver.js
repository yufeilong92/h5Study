/*var c=document.getElementById("mycanvas");
var text=c.getContext("2d");
text.fillStyle="#0000FF";
text.fillRect(0,0,150,75);*/

function getmove(e) {

	 x = e.clientX;
	 y = e.clientY;
  alert(x+y);
	document.getElementById("dive").innerHTML = "Coordinates(" + x + "," + y + ")";
}

function clearmove() {

	document.getElementById("dive").innerHTML = "222222222";
}

