var c = document.getElementById("mychangcolor");
var cxt = c.getContext("2d");
var grd = cxt.createLinearGradient(0, 0, 200, 100);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "#00ff00");
cxt.fillStyle = grd;
cxt.fillRect(0, 0, 200, 100);