"use strict";

let dropDown = document.querySelector("#myDropdown");
let cardExisits = false;
const cards = ['SK', 'HK', 'CK', 'DK', 'SQ', 'HQ', 'CQ', 'DQ', 'SJ', 'HJ', 'CJ', 'DJ', 'S10', 'H10', 'C10', 'D10', 'S9', 'H9', 'C9', 'D9', 'S8', 'H8', 'C8', 'D8', 'S7', 'H7', 'C7', 'D7', 'S6', 'H6', 'C6', 'D6', 'S5', 'H5', 'C5', 'D5', 'S4', 'H4', 'C4', 'D4', 'S3', 'H3', 'C3', 'D3', 'S2', 'H2', 'C2', 'D2', 'SA', 'HA', 'CA', 'DA'];
let playerCards = [];

document.getElementById("generate").onclick = function() {
    predictDeck();
}

let table = false;

let inputHelp = () => {
    if(table) {
        table = false;
        document.getElementById("inputHelp").style.transform = "translateX(500px)";
    }else{
        table = true;
        document.getElementById("inputHelp").style.transform = "translateX(-30px)";
    }
}

document.getElementById("input").onclick = function() {
    inputHelp();
}

function predictDeck() {
    return false;
}

function addCard() {
    document.getElementById("buttons").style.marginTop = "200px";
    if(playerCards.length == 13) {
        document.getElementById("playerCards").value = "";
        // make error message that says cannot add anymore
        return;
    }
    cardExisits = false
    let input = document.getElementById("playerCards").value;
    document.getElementById("error").style.display = "none";
    document.getElementById("error2").style.display = "none";

    for(let i = 0; i < playerCards.length; i++){
        if(input.toUpperCase() == playerCards[i]) {
            // make error message
            cardExisits = true;
            document.getElementById("dropdown").style.display = "inline-block";
        }
    }

    if(cardExisits == false){
        for(let i = 0; i < cards.length; i++) {
            if(input.toUpperCase() == cards[i]) {
                let a = document.createElement('a');
                let addText = dropDown.appendChild(a);
                playerCards.push(input.toUpperCase());
                addText.textContent = playerCards[playerCards.length - 1];
                addText.id = playerCards[playerCards.length - 1];
                document.getElementById(playerCards[playerCards.length - 1]).setAttribute("onclick", `return removeCard("${playerCards[playerCards.length - 1]}")`); 
                document.getElementById("yourCards").textContent = playerCards.join(", ");
                document.getElementById("totalCards").textContent = playerCards.length;
                document.getElementById("a").style.display = "block";
                document.getElementById("dropdown").style.display = "inline-block";
                document.getElementById("inputHelp").style.marginTop = "0";
                break;
            }else if(input == ""){
                document.getElementById("error").style.display = "inline-block";
                document.getElementById("buttons").style.marginTop = "58px";
                // document.getElementById("dropdown").style.display = "inline-block";
            }else if(i == 51) {
                document.getElementById("error2").style.display = "inline-block";
                document.getElementById("buttons").style.marginTop = "0";
                // document.getElementById("dropdown").style.display = "inline-block";
            }
        }
    }
    document.getElementById("playerCards").value = "";
    
}

console.log('%c Hello,\n This is my website!\n I am a begining WebDeveloper.\n I hope you like what I make and possibly hire me.', 'color: orange; font-weight: bold;');
console.log('%c Bellow you can see what all the possible cards are\n and when you submit a card it will update here\n "playerCards" are yours and "cards" are all the\n cards possible ↓', 'color: #16D831; font-weight: bold;');
console.log({ cards, playerCards });
console.table([cards, playerCards]);


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function removeCard(card) {
    
    for(let i = 0; i < playerCards.length; i++) {
        if(card == playerCards[i]) {
            playerCards.splice(i, 1);
            console.log(playerCards);
            document.getElementById("yourCards").textContent = playerCards.join(", ");
            document.getElementById(card).remove();
            document.getElementById("totalCards").textContent = playerCards.length;
        }
    }
    if(playerCards.length == 0) {
        document.getElementById("a").style.display = "none"; //from display: block
        document.getElementById("dropdown").style.display = "none"; //from display: inline-block
    }
    return false;
}