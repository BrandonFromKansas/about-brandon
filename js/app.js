
let score = 0;

function getAge() {
  let age = prompt("Are you over 18?");
  let answer = age.charAt(0).toLowerCase();
  if( answer === "y" ) {
    alert("Oh man, welcome to the real world!");
    console.log("Oh man, welcome to the real world!");
  } else {
    alert("Enjoy your youth!");
    console.log("Enjoy your youth!")
  }
}


function football() {
  let sport = prompt("Have you ever played football?");
  let answer = sport.charAt(0).toLowerCase();
  if ( answer === "y" ) {
    alert("Me too! I hope you got away without any injuries.");
    score++;
    console.log("Me too! I hope you got away without any injuries.");
  } else {
    alert("I don't blame you. It's one very rough sport.");
    console.log("I don't blame you. It's one very rough sport.")
  }
}


function motorcycle() {
  let ride = prompt("Have you ever rode on a motorcycle?");
  let answer = ride.charAt(0).toLowerCase();
  if ( answer === "y" ) {
    alert("It's one of the best feelings in the world, right?");
    score++;
    console.log("It's one of the best feelings in the world, right?");
  } else {
    alert("Oh man, you gotta give it a try at least once. Wear a helmet!");
    console.log("Oh man, you gotta give it a try at least once. Wear a helmet!")
  }
}


function haveWeMet() {
  let hello = prompt("Have you ever been to my site before?");
  let answer = hello.charAt(0).toLowerCase();
  if ( answer === "y" ) {
    alert("Welcome back! Its good to see you're here again.");
    score++;
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
    alert("Me too, even though they're a pain in my butt.... Sometimes");
    score++;
    console.log("I do too. They are a handful but I love 'em.");
  } else {
    alert("Good call! They cost alot of money.");
  }
}


function whoDis() {
  var userName = prompt("What is your name?");
  alert("Hi " + userName + ", it's good to see you today. I hope this message finds you doing well.");
}




function guessThePets() {
  let correctAnswer = false;
  let numberOfGuesses = 3;

  for(let i = 0; i < numberOfGuesses; i++) {
    let guess = prompt("Guess the number of pets I have (Hint: I have both dogs and cats).");
    guess = Number(guess);
    if( guess === 4 ) {
      correctAnswer = true;
      numberOfGuesses = i;
      score++;
      break;
    }
  }
  if( correctAnswer ) {
    document.write(numberOfGuesses);
  } else {
    alert('Nope, not quite!');
  }
}


//Array Questions

function faveColors() {
  let faveColors = ["orange", "black", "green"];
  for ( let i = 1; i < 7; i++ ) {
    let userGuess = prompt("Take a guess. What's my favorite color?");
    if (faveColors.includes(userGuess.toLowerCase())) {
      alert("Oh, so you think you know me? Good guess.");
      score++;
      break;
    } else {
      if (i === 6 ) {
        alert("Thank you for playing! However, my favorite color is " + faveColors);
      } else {
        alert("Nice guess but try again.")
      }
    }
    if( i > 7 ) {
      alert("Thank you for playing! However, my favorite color is " + faveColors);
    }
  }
  alert("Your total score was " + score);
}
