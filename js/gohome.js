let home = localStorage.getItem("homelink");

let createlinknav = document.getElementById("createlinknav");
let createlink = document.getElementById("createlink");

let pInfo = document.getElementById("pinfo");
pInfo.style.display = "none";


let goHomeLink = document.getElementById("gohomelink");

goHomeLink.setAttribute("href", home);

if("firstname" in localStorage){
createlink.style.display = "none";
createlinknav.style.display = "none";
pInfo.style.display = "block";
 }

console.log(home);