"use strict";

let colors = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `black`, `white`];

let turn = 1;
let answer = [];
let guessCount = 0;
let guessArray = [];

document.getElementById("submitButton").onclick = function(){
    submitGuess();
}

document.getElementById("clearButton").onclick = function(){
    clearGuess();
}

let correct = function() {
    let corrCorr = 0;
    let CorrInc = 0;

    for(let i = 0; i < 5; i++) {
        if(answer.includes(guessArray[i])) {
            if(answer[i-1] == guessArray[i]) {
                corrCorr++;
            }else {
                CorrInc++;
            }
        }
    }

    let i = 1;

    for(i; i <= corrCorr; i++) {
        let corr = `c${turn}${i}`;
        document.getElementById(corr).classList.add(`white`);
    }

    if(corrCorr == 4) {
        return setTimeout( () => {youWin()}, 1);
    }

    for(i; i <= (corrCorr + CorrInc ); i++) {
        let corr = `c${turn}${i}`;
        document.getElementById(corr).classList.add(`black`);
    }

    clearGuess();

}

function submitGuess() {
    if(guessArray.length > 4) {
        for(let i = 1; i < 5; i++) {
            let guess = `${turn}${i}`;
            document.getElementById(guess).classList.add(guessArray[i]);
        }
    }
    correct();

    turn++

    if(turn > 9) {
        setTimeout( () => {youLose()}, 1);
    }
}

function clearGuess() {
    let elemList = document.getElementsByClassName(`guess`);
    for(let i = 0; i < elemList.length; i++) {
        let elemListItem = elemList[i];
        for(let j = 0; j < colors.length; j++) {
            if(elemListItem.classList.contains(colors[j])) {
                elemListItem.classList.remove(colors[j]);
            }
        }
    }
    guessCount = 0;
}

let createAnswer = function() {
    answer = [];
    for(let i = 0; i < 4;) {
        let newColor = colors[Math.floor(Math.random() * 7)];
        if(answer.includes(newColor)) {

        }else {
            answer.push(newColor);
            i++;
        }
    }
    console.log(answer);
}

createAnswer();

let chooseColor = function(color) {
    if(guessCount < 4) {
        guessCount++;
        let guessName = `g${guessCount}`;
        document.getElementById(guessName).classList.add(color);
        guessArray[guessCount] = color;
    }
}