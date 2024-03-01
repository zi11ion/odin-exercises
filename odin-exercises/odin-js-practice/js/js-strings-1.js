const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

const song = "Fight the Elderly";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`; 
const songMessage = document.querySelector("#songMessage");
songMessage.textContent = output;

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("stringLength").innerHTML = text.length;

let charAtText = "HELLO WORLD";
document.getElementById("stringCharAt").innerHTML = charAtText.charAt(0);

let codeAtText = "HELLO WORLD";
document.getElementById("stringCodeAt").innerHTML = codeAtText.charCodeAt(0);

let stringAtName = "W3Schools";
let stringAtNameLetter = stringAtName.at(2);
document.getElementById("stringAt").innerHTML = stringAtNameLetter;

let stringBracketLetter = stringAtName[3]
document.getElementById("stringBracket").innerHTML = stringBracketLetter;


function upperCase() {
  let text = document.getElementById("caseText").innerHTML;
  document.getElementById("caseText").innerHTML = text.toUpperCase();
}
function lowerCase() {
  let text = document.getElementById("caseText").innerHTML;
  document.getElementById("caseText").innerHTML = text.toLowerCase();
}

let concatText1 = "Hello";
let concatText2 = "World!";
let concatText3 = concatText1.concat(" ",concatText2);
document.getElementById("concatDemo").innerHTML = concatText3;



// console.log("Hello, World!")

// let message;

// message = 'Hello!'; //store the string 'Hello' in the variable named message

// alert(message); // Hello!

// let message = "Hello!";

// alert(message);

// let user = 'John';
// let age = 25;
// let message = 'Hello';

// let hello = 'Hello world!';

// let message = hello;

// alert(hello);
// alert(message);



// let $ = 1;
// let _ = 2;

// alert($ + _);



// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// // ...when we need to pick a color
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00



// let admin, name;

// name ="John";
// admin = name;

// alert(admin);



// const homePlanet = "Earth";
// let currentUserName = "Johnny";
// alert(currentUserName);

// console.log(23 + 97);
// console.log(1 + 2 + 3 + 4 + 5 + 6);
// console.log((4 + 6 + 9) / 77);
