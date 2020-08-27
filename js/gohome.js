let home = localStorage.getItem("homelink");

let goHomeLink = document.getElementById("gohomelink");

goHomeLink.setAttribute("href", home);

console.log(home);