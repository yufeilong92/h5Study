var c= document.getElementById("cancer");
var cxt=c.getContext("2d");
cxt.fillStyle="#0000FF"

function login(name, password) {
	if(name == "1" && password == "2") {
		alert("登录成功");
	}
};
function login1() {

	var name = document.getElementById("paw").value;
	if(name == "") {
		alert("密碼不能空")

	} else {
		alert(name)
	}

};
function showDialog(){
	alert("SB");
}
