function GetInput() {
    let container = document.createElement("div");
    let firstnameVal = document.getElementById("firstname").value;
    let lastnameVal = document.getElementById("lastname").value;
    let birthdayVal = document.getElementById("day").value;
    let monthVal = document.getElementById("month").value;

    document.body.appendChild(container);
    container.appendChild(firstnameVal);
    container.appendChild(lastnameVal);
    container.appendChild(birthdayVal);
    
    alert("Your name is: " + firstnameVal + " " + lastnameVal + ", and your birthday is: " + monthVal + " " + birthdayVal + ".");

    console.log(firstnameVal + " " + lastnameVal + " : " + birthdayVal + " " + monthVal);
}