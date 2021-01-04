"use strict";

let displyNum = Math.ceil(Math.random() * 100);
document.getElementById("current").innerHTML = displyNum;
let streak = 0;
let best = 0;
document.getElementById("streak").innerHTML = streak;
document.getElementById("best").innerHTML = best;


function lessThan() {
    let newNum = Math.ceil(Math.random() * 100);
    if(newNum < displyNum) {
        displyNum = Math.ceil(Math.random() * 100);
        document.getElementById("current").innerHTML = displyNum;
        streak++;
        document.getElementById("streak").innerHTML = streak;
    }else {
        displyNum = Math.ceil(Math.random() * 100);
        document.getElementById("current").innerHTML = displyNum;
        if(best < streak) {
            best = streak;
            document.getElementById("best").innerHTML = best;
        }
        streak = 0;
        document.getElementById("streak").innerHTML = streak;
    }
}

function greaterThan() {
    let newNum = Math.ceil(Math.random() * 100);
    if(newNum > displyNum) {
        displyNum = Math.ceil(Math.random() * 100);
        document.getElementById("current").innerHTML = displyNum;
        streak++
        document.getElementById("streak").innerHTML = streak;
    }else {
        displyNum = Math.ceil(Math.random() * 100);
        document.getElementById("current").innerHTML = displyNum;
        if(best < streak) {
            best = streak;
            document.getElementById("best").innerHTML = best;
        }
        streak = 0;
        document.getElementById("streak").innerHTML = streak;
    }
}