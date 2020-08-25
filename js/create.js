
function GetInput() {
    let container = document.createElement("div");
    let firstnameVal = document.getElementById("firstname").value;
    let lastnameVal = document.getElementById("lastname").value;
    let monthVal = document.getElementById("month").value;

    if (monthVal == "December") {
        bendertype = "Water";
    }
   if (monthVal == "January") {
       bendertype = "Water";
   }
   if (monthVal == "Feburary") {
    bendertype = "Water";
}
if (monthVal == "March") {
    bendertype = "Earth";
    home = "Ba Sing Se";
}
if (monthVal == "April") {
    bendertype = "Earth";
    home = "Omashu"
}
if (monthVal == "May") {
    bendertype = "Earth";
}
if (monthVal == "June") {
    bendertype = "Fire";
}
if (monthVal == "July") {
    bendertype = "Fire";
}
if (monthVal == "August") {
    bendertype = "Fire";
}
if (monthVal == "September") {
    bendertype = "Air";
}
if (monthVal == "October") {
    bendertype = "Air";
}
if (monthVal == "November") {
    bendertype = "Air";
}
    

    document.write("Hello, " + firstnameVal + " " + lastnameVal + ". You are a(n) " + bendertype + " bender who lives in " +  +);
    
    // alert("Your name is: " + firstnameVal + " " + lastnameVal + ", and your birthday is: " + monthVal + " " + birthdayVal + ".");

    console.log(firstnameVal + " " + lastnameVal + " : " + birthdayVal + " " + monthVal);
}