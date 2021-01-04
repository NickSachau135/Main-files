"use strict";

let turn = "X";
let turnNum = 0;
let winsX = 0;
let winsO = 0;
let winner = "";
let yN = false;


let winODiag1 = document.getElementById("spot11").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot33").classList.contains("byO");
let winODiag2 = document.getElementById("spot13").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot13").classList.contains("byO");

document.getElementById("spot11").onclick = function () {playerTurn("11")};
document.getElementById("spot12").onclick = function () {playerTurn("12")};
document.getElementById("spot13").onclick = function () {playerTurn("13")};

document.getElementById("spot21").onclick = function () {playerTurn("21")};
document.getElementById("spot22").onclick = function () {playerTurn("22")};
document.getElementById("spot23").onclick = function () {playerTurn("23")};

document.getElementById("spot31").onclick = function () {playerTurn("31")};
document.getElementById("spot32").onclick = function () {playerTurn("32")};
document.getElementById("spot33").onclick = function () {playerTurn("33")};

document.getElementById("turn").innerHTML = turn;
document.getElementById("turnNumber").innerHTML = turnNum;

function playerTurn(space) {
    if(document.getElementById(`spot${space}`).classList.contains(`taken`)) {

    }else {
        document.getElementById(`spot${space}`).innerHTML = turn;
        if(turn == "X") {
            turn = "O";
            turnNum++;
            document.getElementById("turnNumber").innerHTML = turnNum;
            document.getElementById("turn").innerHTML = turn;
        }else {
            turn = "X";
            document.getElementById("turnNumber").innerHTML = turnNum;
            document.getElementById("turn").innerHTML = turn;
        }
    }

    document.getElementById(`spot${space}`).classList.add("taken");
    if(turn == "X") {
        document.getElementById(`spot${space}`).classList.add("byO");
    }else {
        document.getElementById(`spot${space}`).classList.add("byX");
    }

    
    if(document.getElementById("spot11").classList.contains("byX") && document.getElementById("spot22").classList.contains("byX") && document.getElementById("spot33").classList.contains("byX") || document.getElementById("spot13").classList.contains("byX") && document.getElementById("spot22").classList.contains("byX") && document.getElementById("spot31").classList.contains("byX") || document.getElementById("spot11").classList.contains("byX") && document.getElementById("spot12").classList.contains("byX") && document.getElementById("spot13").classList.contains("byX") || document.getElementById("spot21").classList.contains("byX") && document.getElementById("spot22").classList.contains("byX") && document.getElementById("spot23").classList.contains("byX") || document.getElementById("spot31").classList.contains("byX") && document.getElementById("spot32").classList.contains("byX") && document.getElementById("spot33").classList.contains("byX") || document.getElementById("spot11").classList.contains("byX") && document.getElementById("spot21").classList.contains("byX") && document.getElementById("spot31").classList.contains("byX") || document.getElementById("spot12").classList.contains("byX") && document.getElementById("spot22").classList.contains("byX") && document.getElementById("spot32").classList.contains("byX") || document.getElementById("spot13").classList.contains("byX") && document.getElementById("spot23").classList.contains("byX") && document.getElementById("spot33").classList.contains("byX")) {
        xWins();
    }else if(document.getElementById("spot11").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot33").classList.contains("byO") || document.getElementById("spot13").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot31").classList.contains("byO") || document.getElementById("spot11").classList.contains("byO") && document.getElementById("spot12").classList.contains("byO") && document.getElementById("spot13").classList.contains("byO") || document.getElementById("spot21").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot23").classList.contains("byO") || document.getElementById("spot31").classList.contains("byO") && document.getElementById("spot32").classList.contains("byO") && document.getElementById("spot33").classList.contains("byO") || document.getElementById("spot11").classList.contains("byO") && document.getElementById("spot21").classList.contains("byO") && document.getElementById("spot31").classList.contains("byO") || document.getElementById("spot12").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot32").classList.contains("byO") || document.getElementById("spot13").classList.contains("byO") && document.getElementById("spot23").classList.contains("byO") && document.getElementById("spot33").classList.contains("byO")) {
        oWins();
    }

}

function xWins() {
    if(document.getElementById("spot11").classList.contains("byX") && document.getElementById("spot22").classList.contains("byX") && document.getElementById("spot33").classList.contains("byX")) {
        document.getElementById("spot11").classList.add("win");
        document.getElementById("spot22").classList.add("win");
        document.getElementById("spot33").classList.add("win");
    }

    if(document.getElementById("spot13").classList.contains("byX") && document.getElementById("spot22").classList.contains("byX") && document.getElementById("spot31").classList.contains("byX")) {
        document.getElementById("spot13").classList.add("win");
        document.getElementById("spot22").classList.add("win");
        document.getElementById("spot31").classList.add("win");
    } 

    if(document.getElementById("spot11").classList.contains("byX") && document.getElementById("spot12").classList.contains("byX") && document.getElementById("spot13").classList.contains("byX")) {
        document.getElementById("spot11").classList.add("win");
        document.getElementById("spot12").classList.add("win");
        document.getElementById("spot13").classList.add("win");
    }

    if(document.getElementById("spot21").classList.contains("byX") && document.getElementById("spot22").classList.contains("byX") && document.getElementById("spot23").classList.contains("byX")) {
        document.getElementById("spot21").classList.add("win");
        document.getElementById("spot22").classList.add("win");
        document.getElementById("spot23").classList.add("win");
    }

    if(document.getElementById("spot31").classList.contains("byX") && document.getElementById("spot32").classList.contains("byX") && document.getElementById("spot33").classList.contains("byX")) {
        document.getElementById("spot31").classList.add("win");
        document.getElementById("spot32").classList.add("win");
        document.getElementById("spot33").classList.add("win");
    }

    if(document.getElementById("spot11").classList.contains("byX") && document.getElementById("spot21").classList.contains("byX") && document.getElementById("spot31").classList.contains("byX")) {
        document.getElementById("spot11").classList.add("win");
        document.getElementById("spot21").classList.add("win");
        document.getElementById("spot31").classList.add("win");
    }

    if(document.getElementById("spot12").classList.contains("byX") && document.getElementById("spot22").classList.contains("byX") && document.getElementById("spot32").classList.contains("byX")) {
        document.getElementById("spot12").classList.add("win");
        document.getElementById("spot22").classList.add("win");
        document.getElementById("spot32").classList.add("win");
    }

    if(document.getElementById("spot13").classList.contains("byX") && document.getElementById("spot23").classList.contains("byX") && document.getElementById("spot33").classList.contains("byX")) {
        document.getElementById("spot13").classList.add("win");
        document.getElementById("spot23").classList.add("win");
        document.getElementById("spot33").classList.add("win");
    }
    let x = "X Wins!"
    console.log('%c%s', 'color: #42F20E', x);
    winsX++;
    document.getElementById("winsX").innerHTML = winsX;
    winner = "X";
    setTimeout(function() {askRestart()}, 500);
    noMorePlaying();
}

function oWins() {
    if(document.getElementById("spot11").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot33").classList.contains("byO")) {
        document.getElementById("spot11").classList.add("win");
        document.getElementById("spot22").classList.add("win");
        document.getElementById("spot33").classList.add("win");
    }

    if(document.getElementById("spot13").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot31").classList.contains("byO")) {
        document.getElementById("spot13").classList.add("win");
        document.getElementById("spot22").classList.add("win");
        document.getElementById("spot31").classList.add("win");
    } 

    if(document.getElementById("spot11").classList.contains("byO") && document.getElementById("spot12").classList.contains("byO") && document.getElementById("spot13").classList.contains("byO")) {
        document.getElementById("spot11").classList.add("win");
        document.getElementById("spot12").classList.add("win");
        document.getElementById("spot13").classList.add("win");
    }

    if(document.getElementById("spot21").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot23").classList.contains("byO")) {
        document.getElementById("spot21").classList.add("win");
        document.getElementById("spot22").classList.add("win");
        document.getElementById("spot23").classList.add("win");
    }

    if(document.getElementById("spot31").classList.contains("byO") && document.getElementById("spot32").classList.contains("byO") && document.getElementById("spot33").classList.contains("byO")) {
        document.getElementById("spot31").classList.add("win");
        document.getElementById("spot32").classList.add("win");
        document.getElementById("spot33").classList.add("win");
    }

    if(document.getElementById("spot11").classList.contains("byO") && document.getElementById("spot21").classList.contains("byO") && document.getElementById("spot31").classList.contains("byO")) {
        document.getElementById("spot11").classList.add("win");
        document.getElementById("spot21").classList.add("win");
        document.getElementById("spot31").classList.add("win");
    }

    if(document.getElementById("spot12").classList.contains("byO") && document.getElementById("spot22").classList.contains("byO") && document.getElementById("spot32").classList.contains("byO")) {
        document.getElementById("spot12").classList.add("win");
        document.getElementById("spot22").classList.add("win");
        document.getElementById("spot32").classList.add("win");
    }

    if(document.getElementById("spot13").classList.contains("byO") && document.getElementById("spot23").classList.contains("byO") && document.getElementById("spot33").classList.contains("byO")) {
        document.getElementById("spot13").classList.add("win");
        document.getElementById("spot23").classList.add("win");
        document.getElementById("spot33").classList.add("win");
    }
    let o = "O Wins!"
    console.log('%c%s', 'color: #19e2d1', o);
    winsO++;
    document.getElementById("winsO").innerHTML = winsO;
    winner = "O";
    setTimeout(function() {askRestart()});
    noMorePlaying();
}

function askRestart() {
    yN = confirm("Do you want to restart?");
    if(yN === true) {
        reset();
    }
}

function reset() {
    for(let i = 1; i <= 3; i++) {
        document.getElementById(`spot1${i}`).innerHTML = "";
    }

    for(let j = 1; j <= 3; j++) {
        document.getElementById(`spot2${j}`).innerHTML = "";
    }

    for(let k = 1; k <= 3; k++) {
        document.getElementById(`spot3${k}`).innerHTML = "";
    }

    document.getElementById("spot11").onclick = function () {playerTurn("11")};
    document.getElementById("spot12").onclick = function () {playerTurn("12")};
    document.getElementById("spot13").onclick = function () {playerTurn("13")};

    document.getElementById("spot21").onclick = function () {playerTurn("21")};
    document.getElementById("spot22").onclick = function () {playerTurn("22")};
    document.getElementById("spot23").onclick = function () {playerTurn("23")};

    document.getElementById("spot31").onclick = function () {playerTurn("31")};
    document.getElementById("spot32").onclick = function () {playerTurn("32")};
    document.getElementById("spot33").onclick = function () {playerTurn("33")};

    turn = "X";
    turnNum = 0;
    
    document.getElementById("turn").innerHTML = turn;
    document.getElementById("turnNumber").innerHTML = turnNum;

    document.getElementById("spot11").classList.remove("win");
    document.getElementById("spot12").classList.remove("win");
    document.getElementById("spot13").classList.remove("win");
    document.getElementById("spot21").classList.remove("win");
    document.getElementById("spot22").classList.remove("win");
    document.getElementById("spot23").classList.remove("win");
    document.getElementById("spot31").classList.remove("win");
    document.getElementById("spot32").classList.remove("win");
    document.getElementById("spot33").classList.remove("win");
}

function noMorePlaying() {
    document.getElementById("spot11").onclick = function () {};
    document.getElementById("spot12").onclick = function () {};
    document.getElementById("spot13").onclick = function () {};

    document.getElementById("spot21").onclick = function () {};
    document.getElementById("spot22").onclick = function () {};
    document.getElementById("spot23").onclick = function () {};

    document.getElementById("spot31").onclick = function () {};
    document.getElementById("spot32").onclick = function () {};
    document.getElementById("spot33").onclick = function () {};

    if(document.getElementById("spot11").classList.contains("taken") && document.getElementById("spot12").classList.contains("taken") && document.getElementById("spot13").classList.contains("taken") && document.getElementById("spot21").classList.contains("taken") && document.getElementById("spot22").classList.contains("taken") && document.getElementById("spot23").classList.contains("taken") && document.getElementById("spot31").classList.contains("taken") && document.getElementById("spot32").classList.contains("taken") && document.getElementById("spot33").classList.contains("taken")){
        console.log(`congrats that was a intense game`);
    }else{
        document.getElementById("spot11").classList.remove("taken");
        document.getElementById("spot12").classList.remove("taken");
        document.getElementById("spot13").classList.remove("taken");
        document.getElementById("spot21").classList.remove("taken");
        document.getElementById("spot22").classList.remove("taken");
        document.getElementById("spot23").classList.remove("taken");
        document.getElementById("spot31").classList.remove("taken");
        document.getElementById("spot32").classList.remove("taken");
        document.getElementById("spot33").classList.remove("taken");

        document.getElementById("spot11").classList.remove("byX");
        document.getElementById("spot12").classList.remove("byX");
        document.getElementById("spot13").classList.remove("byX");
        document.getElementById("spot21").classList.remove("byX");
        document.getElementById("spot22").classList.remove("byX");
        document.getElementById("spot23").classList.remove("byX");
        document.getElementById("spot31").classList.remove("byX");
        document.getElementById("spot32").classList.remove("byX");
        document.getElementById("spot33").classList.remove("byX");

        document.getElementById("spot11").classList.remove("byO");
        document.getElementById("spot12").classList.remove("byO");
        document.getElementById("spot13").classList.remove("byO");
        document.getElementById("spot21").classList.remove("byO");
        document.getElementById("spot22").classList.remove("byO");
        document.getElementById("spot23").classList.remove("byO");
        document.getElementById("spot31").classList.remove("byO");
        document.getElementById("spot32").classList.remove("byO");
        document.getElementById("spot33").classList.remove("byO");
    }
}