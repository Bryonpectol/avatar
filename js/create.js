
    
    
    let avatarLink = document.getElementById("avatarlink");
    avatarLink.style.display = "none";

    let earthLink = document.getElementById("earthlink");
    earthLink.style.display = "none";

    let fireLink = document.getElementById("firelink");
    fireLink.style.display = "none";

    let waterLink = document.getElementById("waterlink");
    waterLink.style.display = "none";

    let airLink = document.getElementById("airlink");
    airLink.style.display = "none";

    let homeImg = document.getElementById("homeimg");


    let waterHome = "/html/water.html";
    let earthHome = "/html/earth.html";
    let fireHome = "/html/fire.html";
    let airHome = "/html/air.html";

    // let NextBtn1 = document.getElementById("btn1");
    // NextBtn1.style.display = "none";

    // let container2 = document.getElementById("secondaboutdiv");
    // container2.style.display = "none";

    let container1 = document.getElementById("aboutdiv");
    container1.style.display = "none";


function GetInput() {
    container1.style.display = "block";


    let firstnameVal = document.getElementById("firstname").value;
    let lastnameVal = document.getElementById("lastname").value;
    let monthVal = document.getElementById("month").value;
    let ageVal = document.getElementById("age").value;  
    let Gender = document.getElementById("gender").value;




    let Choice = "the Avatar!"
    let NoChoice = "not the Avatar."
    let Close = "super close to becoming the avatar!"


    let Form = document.getElementById("mainform");

const earthhome = ["Ba Sing Se", "Omashu", "Kyoshi Island", "Chin Village", "Gaoling", "Plains Village", "Senlin Village", "Makapu Village", "The outskirts"];
const firehome = ["Ember Island", "Fire Fountain City", "The Fire Nation Capital", "Jang Hui", "Shu Jing", "The outskirts"];
const waterhome = ["The Foggy Swamp", "The Northern Water Tribe", "The Southern Water Tribe", "The outskirts"];
const airhome = ["The Northern Air Temple", "The Eastern Air Temple", "The Southern Air Temple", "The Western Air Temple", "The outskirts"];

const job = ["a soldier for the military", "a fisherman", "a blacksmith", "a royal", "a peasant", "a tea maker", "an entertainer", "a general for the military", "a merchant", "a pirate", "a miner", "a bending instructor", "a doctor", "a sailor", "a chef", "a housemaid", "an inn keeper", "an inventor", "a circus performer"];

const era = ["Era of Raava", "First Age of the Avatar", "Second Age of the Avatar", "Harmonic Convergence", "Hundred Year War", "Anti-bending Revolution"]

const homeIMG = ["/images/nwt.png", "/images/swt.png", "/images/tfs.png"];

const malelove = ["Lee", "Guko", "San", "Fred", "Shang", "Uzhan", "Yohmi", "Kim", "Jin"];
const maleloveLast = [" Yang", " Wu", " Qino", " Beifong", " Xiao", " Sonar", " Li", " Chen"];
const femalelove = ["Yang", "Kora", "Julie", "Aiko", "Kim", "Gia", "Aya", "Mei", "Tai"]
const femaleloveLast = [" Yong", " Wu", " Qino", " Beifong", " Xiao", " Sonar", " Li", " Chen"]

let randomLoverMale = malelove[Math.floor(Math.random() * malelove.length)];
let randomLoverMaleLast = maleloveLast[Math.floor(Math.random() * maleloveLast.length)];

let randomLoverFemale = femalelove[Math.floor(Math.random() * femalelove.length)];
let randomLoverFemaleLast = femaleloveLast[Math.floor(Math.random() * femaleloveLast.length)];


if(Gender == "female") {
    oppo = "man";
    lover = randomLoverMale + randomLoverMaleLast;
}

if(Gender == "male") {
    oppo = "woman";
    lover = randomLoverFemale + randomLoverFemaleLast;
}

let LoverDES = localStorage.setItem("Lovers", lover);
let opposite = localStorage.setItem("op", oppo);


let earthHOME = earthhome[Math.floor(Math.random() * earthhome.length)];
let waterHOME = waterhome[Math.floor(Math.random() * waterhome.length)];
let fireHOME = firehome[Math.floor(Math.random() * firehome.length)];
let airHOME = airhome[Math.floor(Math.random() * airhome.length)];


let JOB = job[Math.floor(Math.random() * job.length)];

let avatarChoose = Math.floor(Math.random() * 7000000001 - 1);

let avatarDes = localStorage.setItem("avatardes", avatarChoose);

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
        bendertype = "Water";
        home = waterHOME;
        document.body.style.backgroundImage = "url('/images/bgs/water.jpg')";
        document.body.style.backgroundSize = "cover";
        waterLink.style.display = "block";
        let homeLink = localStorage.setItem("homelink", waterHome);
    }
   if (monthVal == "January") {
       bendertype = "Water";
       home = waterHOME;
       document.body.style.backgroundImage = "url('/images/bgs/water.jpg')";
       document.body.style.backgroundSize = "cover";
       waterLink.style.display = "block";
       let homeLink = localStorage.setItem("homelink", waterHome);
   }
   if (monthVal == "Feburary") {
    bendertype = "Water";
    home = waterHOME;
    document.body.style.backgroundImage = "url('/images/bgs/water.jpg')";
    document.body.style.backgroundSize = "cover";
    waterLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", waterHome);
}
if (monthVal == "March") {
    bendertype = "Earth";
    home = earthHOME;
    document.body.style.backgroundImage = "url('/images/bgs/earth.jpg')";
    document.body.style.backgroundSize = "cover";
    earthLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", earthHome);
}
if (monthVal == "April") {
    bendertype = "Earth";
    home = earthHOME;
    document.body.style.backgroundImage = "url('/images/bgs/earth.jpg')";
    document.body.style.backgroundSize = "cover";
    earthLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", earthHome);
}
if (monthVal == "May") {
    bendertype = "Earth";
    home = earthHOME;
    document.body.style.backgroundImage = "url('/images/bgs/earth.jpg')";
    document.body.style.backgroundSize = "cover";
    earthLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", earthHome);
}
if (monthVal == "June") {
    bendertype = "Fire";
    home = fireHOME;
    document.body.style.backgroundImage = "url('/images/bgs/fire.png')";
    document.body.style.backgroundSize = "cover";
    fireLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", fireHome);
}
if (monthVal == "July") {
    bendertype = "Fire";
    home = fireHOME;
    document.body.style.backgroundImage = "url('/images/bgs/fire.png')";
    document.body.style.backgroundSize = "cover";
    fireLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", fireHome);
}
if (monthVal == "August") {
    bendertype = "Fire";
    home = fireHOME;
    document.body.style.backgroundImage = "url('/images/bgs/fire.png')";
    document.body.style.backgroundSize = "cover";
    fireLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", fireHome);
}
if (monthVal == "September") {
    bendertype = "Air";
    home = airHOME;
    document.body.style.backgroundImage = "url('/images/bgs/air.jpg')";
    document.body.style.backgroundSize = "cover";
    airLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", airHome);
}
if (monthVal == "October") {
    bendertype = "Air";
    home = airHOME;
    document.body.style.backgroundImage = "url('/images/bgs/air.jpg')";
    document.body.style.backgroundSize = "cover";
    airLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", airHome);
}
if (monthVal == "November") {
    bendertype = "Air";
    home = airHOME;
    document.body.style.backgroundImage = "url('/images/bgs/air.jpg')";
    document.body.style.backgroundSize = "cover";
    airLink.style.display = "block";
    let homeLink = localStorage.setItem("homelink", airHome);
}

// let HomeIMG = homeIMG[Math.floor(Math.random() * homeIMG.length)];
let Job = localStorage.setItem("job", JOB);

let genderDES = localStorage.setItem("gender", Gender);



if(avatarChoose == 42) {
    avatarChoice = Choice;
    avatarLink.style.display = "block";
}
else {
    avatarChoice = NoChoice;
}

if (avatarChoose < 42) {
    avatarChoice = Close;
}

if (avatarChoose > 42 && avatarChoose <= 100) {
    avatarChoice = Close;
}


    
    Form.style.display = "none";

    localStorage.setItem("firstname", firstnameVal);
    localStorage.setItem("lastname", lastnameVal);
    localStorage.setItem("month", monthVal);
    localStorage.setItem("ageval", ageVal);

    localStorage.setItem("bendertype", home);


    

    container1 = document.getElementById("aboutyou").innerHTML = "Hello, " + firstnameVal + " " + lastnameVal + ". You are a " + Gender + " " + bendertype + " bender who was born in " + home + ". You are " + ageVal + " years old. There is a 1 in 7 billion chance that you will be the next Avatar and, you are  " + avatarChoice + " You are also " + JOB + "." ;

    // NextBtn1.style.display = "block";

    // alert("Your name is: " + firstnameVal + " " + lastnameVal + ", and your birthday is: " + monthVal + " " + birthdayVal + ".");
    console.log(avatarChoose + " : " + avatarChoice + " : " + waterHOME + " : " + homeImg + " : " + Gender);
}

function secondInput() {

    let firstnameVal = document.getElementById("firstname").value;
    let lastnameVal = document.getElementById("lastname").value;
    let monthVal = document.getElementById("month").value;
    let ageVal = document.getElementById("age").value;  

    container2.style.display = "block";


    container2 = document.getElementById("secondabout").innerHTML = "" + firstnameVal;

}