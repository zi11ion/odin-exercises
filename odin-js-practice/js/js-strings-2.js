let text1 = "     Hello World!      ";
let text2 = text1.trim();
document.getElementById("displayText1").innerHTML = text1;
document.getElementById("trimDemo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

let text3 = text1.trimStart();
document.getElementById("trimStartDemo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text3 = " + text3.length;

let text4 = text1.trimEnd();
document.getElementById("trimEndDemo").innerHTML = "Length text1 = " + text1.length + "<br>Length text4 = " + text4.length;
