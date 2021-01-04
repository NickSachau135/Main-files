console.log("Hello World");
console.log("3+5");
console.log(2 + "2");
console.log(2 - "2");
alert("WARNING! CALL (835) 298- 1772 FOR HELP. ");
alert("Thank you for downloading my new virus");

//confirm();
//a way to check yes or no from a user.
//the options are returened as either a true or a false

var check = confirm("Do you like downloading a virus");

if(check == true){
    console.log('Dont initialize "virus download"');
}else{
    console.log('initialize "virus download"');
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var score = 0;
var firstAnswer = prompt("What kind of hobbys do you like to do?");
var secondAnswer = prompt("Did you like downloading a virus")
var thirdAnswer = prompt("What team has the longest winning streak in NBA History")
var fourthAnswer = prompt("Is this word spelt correct? : Flashlite")
var fifthAnswer = prompt("Is this word spelt correct? : keybord")
var sixthAnswer = prompt("Is this word spelt correct? : Projekt")
var seventhAnswer = prompt("Is this word spelt correct? : Speakers")
var eighthAnswer = prompt("Is this word spelt correct? : Time")
var ninethAnswer = prompt("Is this name spelt correct? : Mr.peck")
var tenthAnswer = prompt("Is this sentence spelt correct? : I have your voice in a soundboard :)")


if(firstAnswer == "Rc Cars"){
    score ++;
}
if(secondAnswer == "yes"){
    score ++;
}else if(secondAnswer == "Yes"){
    score ++;
}
if(thirdAnswer == "Lakers"){
    score ++;
}
if(fourthAnswer == "no"){
    score ++;
}else if(fourthAnswer == "No"){
    score ++;
}
if(fifthAnswer == "no"){
    score ++;
}else if(fifthAnswer == "No"){
    score ++;
}
if(sixthAnswer == "no"){
    score ++;
}else if(sixthAnswer == "No"){
    score ++;
}
if(seventhAnswer == "yes"){
    score ++;
}else if(seventhAnswer == "Yes"){
    score ++;
}
if(eighthAnswer == "yes"){
    score ++;
}else if(eighthAnswer == "Yes"){
    sore ++;
}
if(ninethAnswer == "yes"){
    score ++;
}else if(ninethAnswer == "Yes"){
    score ++;
}
if(tenthAnswer == "why... Don't do this to me :("){
    score ++;
}

console.log(score);

// var num = 12

// var numT = Math.sqrt(num)

// console.log(numT)