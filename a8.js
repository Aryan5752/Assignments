
var message="Defined in Global";
console.log("global: message : " + message);
var a=function () {
	var message="Defined in local";
console.log("a : message : " + message);
}
a();
