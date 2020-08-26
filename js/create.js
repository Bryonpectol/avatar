
    let avatarLink = document.getElementById("avatarlink");
    avatarLink.style.display = "none";

function GetInput() {
    let container = document.getElementById("aboutdiv");
    let firstnameVal = document.getElementById("firstname").value;
    let lastnameVal = document.getElementById("lastname").value;
    let monthVal = document.getElementById("month").value;
    let ageVal = document.getElementById("age").value;    


    let Choice = "the Avatar!"
    let NoChoice = "not the Avatar."

    let Form = document.getElementById("mainform");

const earthhome = ["Ba Sing Se", "Omashu", "Kyoshi Island", "Chin Village", "Gaoling", "Plains Village"];
const firehome = ["Ember Island", "Fire Fountain City", "The Fire Nation Capital", "Jang Hui", "Shu Jing"];
const waterhome = ["The Foggy Swamp", "The Northern Water Tribe", "The Southern Water Tribe"];
const airhome = ["The Northern Air Temple", "The Eastern Air Temple", "The Southern Air Temple", "The Western Air Temple"];

const job = ["a soldier for the military", "a fisherman", "a blacksmith", "a royal", "a peasant", "a tea maker", "an entertainer", "a general for the military", "a merchant", "a pirate", "a miner"];

const era = ["Era of Raava", "First Age of the Avatar", "Second Age of the Avatar", "Harmonic Convergence", "Hundred Year War", "Anti-bending Revolution"]

let earthHOME = earthhome[Math.floor(Math.random() * earthhome.length)];
let waterHOME = waterhome[Math.floor(Math.random() * waterhome.length)];
let fireHOME = firehome[Math.floor(Math.random() * firehome.length)];
let airHOME = airhome[Math.floor(Math.random() * airhome.length)];

let JOB = job[Math.floor(Math.random() * job.length)];

let avatarChoose = Math.floor(Math.random() * 7000000001 - 1);



    if(ageVal >= 80) {
        YourEra = era[0];
    }

    if (ageVal <= 15) {
        YourEra = era[5]
    }

    if (ageVal > 15 && ageVal <= 25) {
        YourEra = era[4]
    }

    if (ageVal > 25 && ageVal <= 45) {
        YourEra = era[3]
    }

    if (ageVal > 45 && ageVal <= 60) {
        YourEra = era[2]
    }

    if (ageVal > 60 && ageVal <= 79) {
        YourEra = era[1]
    }
    

    if (monthVal == "December") {
        bendertype = "a Water";
        home = waterHOME;
        document.body.style.backgroundColor = "blue";
    }
   if (monthVal == "January") {
       bendertype = "a Water";
       home = waterHOME;
       document.body.style.backgroundColor = "blue";
   }
   if (monthVal == "Feburary") {
    bendertype = "a Water";
    home = waterHOME;
    document.body.style.backgroundColor = "blue";
}
if (monthVal == "March") {
    bendertype = "an Earth";
    home = earthHOME;
    document.body.style.backgroundColor = "green";
}
if (monthVal == "April") {
    bendertype = "an Earth";
    home = earthHOME;
    document.body.style.backgroundColor = "green";
}
if (monthVal == "May") {
    bendertype = "an Earth";
    home = earthHOME;
    document.body.style.backgroundColor = "green";
}
if (monthVal == "June") {
    bendertype = "a Fire";
    home = fireHOME;
    document.body.style.backgroundColor = "red";
}
if (monthVal == "July") {
    bendertype = "a Fire";
    home = fireHOME;
    document.body.style.backgroundColor = "red";
}
if (monthVal == "August") {
    bendertype = "a Fire";
    home = fireHOME;
    document.body.style.backgroundColor = "red";
}
if (monthVal == "September") {
    bendertype = "an Air";
    home = airHOME;
    document.body.style.backgroundColor = "lightgrey";
}
if (monthVal == "October") {
    bendertype = "an Air";
    home = airHOME;
    document.body.style.backgroundColor = "lightgrey";
}
if (monthVal == "November") {
    bendertype = "an Air";
    home = airHOME;
    document.body.style.backgroundColor = "lightgrey";
}

if(avatarChoose == 42) {
    avatarChoice = Choice;
    avatarLink.style.display = "visible";
}
else {
    avatarChoice = NoChoice;
}


    
    Form.style.display = "none";

    container = document.getElementById("aboutyou").innerHTML = "Hello, " + firstnameVal + " " + lastnameVal + ". You are " + bendertype + " bender who lives in " + home + ". You are " + ageVal + " years old. There is a 1 in 7 billion chance that you will be the next Avatar and, you are  " + avatarChoice + " You are also " + JOB + "." ;
    
    // alert("Your name is: " + firstnameVal + " " + lastnameVal + ", and your birthday is: " + monthVal + " " + birthdayVal + ".");
    console.log(avatarChoose + " : " + avatarChoice);
}

container.ClassName = "container";