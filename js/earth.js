let name=localStorage.getItem("firstname");
let lastname=localStorage.getItem("lastname");
let month=localStorage.getItem("month");
let age=localStorage.getItem("ageval");
let bender=localStorage.getItem("bendertype");

console.log(name + lastname + month + age);

let container = document.getElementById("aboutYOU").innerHTML = ""+ name + ", " + "welcome to " + bender + ". This is your home."; 