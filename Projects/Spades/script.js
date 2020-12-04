"use strict";

let cards = ['SK', 'HK', 'CK', 'DK', 'SQ', 'HQ', 'CQ', 'DQ', 'SJ', 'HJ', 'CJ', 'DJ', 'S10', 'H10', 'C10', 'D10', 'S9', 'H9', 'C9', 'D9', 'S8', 'H8', 'C8', 'D8', 'S7', 'H7', 'C7', 'D7', 'S6', 'H6', 'C6', 'D6', 'S5', 'H5', 'C5', 'D5', 'S4', 'H4', 'C4', 'D4', 'S3', 'H3', 'C3', 'D3', 'S2', 'H2', 'C2', 'D2', 'SA', 'HA', 'CA', 'DA'];
let playerCards = [];

document.getElementById("generate").onclick = function() {
    // predictDeck();
}

function predictDeck() {
    for(let i = 0; i < cards.length; i++) {
        console.log(cards.length);
    }
}

function addCard() {
    let input = document.getElementById("playerCards").value;
    console.log(input);
    if(input == "SK" || input == "sk") {
        playerCards.push(input);
        document.getElementById("yourCards").innerHTML = playerCards;
        document.getElementById("playerCards").value = "";
    }else if(input == ""){
        document.getElementById("error").style.display = "inline-block";
    }else {
        document.getElementById("error2").style.display = "inline-block";
    }
}

console.log('%c Hello,\n This is my website!\n Here you can play the game called master mind.\n I am a begining WebDeveloper.\n I hope you like what I make and possibly hire me.', 'color: orange; font-weight: bold;');
console.log('%c Bellow you can see what all the possible cards are\n and when you submit a card it will update here\n "playerCards" are yours and "cards" are all the\n cards possible ↓', 'color: #16D831; font-weight: bold;');
console.log({ cards, playerCards });
console.table([cards, playerCards]);