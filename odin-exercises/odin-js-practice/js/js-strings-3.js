let padStartText = "5";
padStartText = padStartText.padStart(4,"0");
document.getElementById("padStartDemo").innerHTML = padStartText;

let padEndText = "6";
padEndText = padEndText.padEnd(4,"0");
document.getElementById("padEndDemo").innerHTML = padEndText;

let repeatText = "Hello world!";
let repeatResult = repeatText.repeat(2);
document.getElementById("repeatDemo").innerHTML = repeatResult;

function replaceFunction() {
    let text = document.getElementById("replaceDemo").innerHTML;
    document.getElementById("replaceDemo").innerHTML = text.replace(/MICROSOFT/i, "W3Schools");
}

let replaceText = "I love stuff. Stuff are very cool. Stuff are popular.";
replaceText = replaceText.replaceAll("Stuff", "Cats");
replaceText = replaceText.replaceAll("stuff", "cats");
document.getElementById("replaceAllDemo").innerHTML = replaceText;

let arrayText ="a,b,c,d,e,f";
const myArray = arrayText.split(",");
document.getElementById("arrayDemo").innerHTML = myArray[0];