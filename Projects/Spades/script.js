"use strict";

let cards = ['SK', 'HK', 'CK', 'DK', 'SQ', 'HQ', 'CQ', 'DQ', 'SJ', 'HJ', 'CJ', 'DJ', 'S10', 'H10', 'C10', 'D10', 'S9', 'H9', 'C9', 'D9', 'S8', 'H8', 'C8', 'D8', 'S7', 'H7', 'C7', 'D7', 'S6', 'H6', 'C6', 'D6', 'S5', 'H5', 'C5', 'D5', 'S4', 'H4', 'C4', 'D4', 'S3', 'H3', 'C3', 'D3', 'S2', 'H2', 'C2', 'D2', 'SA', 'HA', 'CA', 'DA'];

let playerCards = []

document.getElementById("generate").onclick = function() {
    predictDeck();
}

function predictDeck() {
    for(let i = 0; i < cards.length; i++) {
        console.log(cards.length);
    }
}

function addCard() {
    boxvalue = document.getElementById('box').value;
    playerCards.push(boxvalue);  
    console.log(playerCards);
    return false;
}