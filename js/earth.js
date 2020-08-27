let name=localStorage.getItem("firstname");
let lastname=localStorage.getItem("lastname");
let month=localStorage.getItem("month");
let age=localStorage.getItem("ageval");
let bender=localStorage.getItem("bendertype");
let imageHome=localStorage.getItem("homeimage");
let avatarDES=localStorage.getItem("avatardes");
let jobb = localStorage.getItem("job");
let LOVERS = localStorage.getItem("Lovers");
let Opposite = localStorage.getItem("op");

console.log(name + lastname + month + age + imageHome);

let container = document.getElementById("aboutYOU").innerHTML = ""+ name + ", " + "welcome to " + bender + ". This is your home.";

// let IMage = document.getElementById("homeimg");

// IMage.setAttribute('src', imageHome);

let secondCon = document.getElementById("ABOUTyou").innerHTML = "Your chance of becoming the Avatar was: " + avatarDES + " / 7000000000 (billion), Sorry. But remember, you are still " + jobb + ". During your life, you marry a " + Opposite + " named, " + LOVERS + ".";

