

function getAge() {
    let age = prompt("Are you over 18?");
    let answer = age.charAt(0).toLowerCase();
    if( answer === "y" ) {
        alert("Oh man, welcome to the real world!")
        console.log("Oh man, welcome to the real world!");
    } else {
        alert("Enjoy your youth!")
        console.log("Enjoy your youth!")
    }
}


function football() {
    let sport = prompt("Have you ever played football?");
    let answer = sport.charAt(0).toLowerCase();
    if ( answer === "y" ) {
        alert("Me too! I hope you got away without any injuries.")
        console.log("Me too! I hope you got away without any injuries.");
    } else {
        alert("I don't blame you. It's one very rough sport.")
        console.log("I don't blame you. It's one very rough sport.")
    }
}


function motorcycle() {
    let ride = prompt("Have you ever rode on a motorcycle?");
    let answer = ride.charAt(0).toLowerCase();
    if ( answer === "y" ) {
        alert("It's one of the best feelings in the world, right?")
        console.log("It's one of the best feelings in the world, right?");
    }  else {
        alert("Oh man, you gotta give it a try at least once. Wear a helmet!")
        console.log("Oh man, you gotta give it a try at least once. Wear a helmet!")
    }
}


function haveWeMet() {
    let hello = prompt("Have you ever been to my site before?");
    let answer = hello.charAt(0).toLowerCase();
    if ( answer === "y" ) {
        alert("Welcome back! Its good to see you're here again.")
        console.log("Welcome back! Its good to see you're here again.");
    } else {
        alert("Well then hello there. It is nice to meet you and thank you for stopping by!")
        console.log("Well then hello there. It is nice to meet you and thank you for stopping by!")
    }
}


function fullHouse() {
    let pets = prompt("Do you own any pets?");
    let answer = pets.charAt(0).toLowerCase();
    if ( answer === "y" ) {
        alert("I do too. They are a handful but I love 'em.")
        console.log("I do too. They are a handful but I love 'em.");
    } else {
        alert("Totally understandable. They are alot of extra work and MESSY!")
    }
}