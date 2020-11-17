"use strict";

function createPigLatinWord(word) {
    
    word = word.toLowerCase();
    word = word.split("");

    if(word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u") {
        return (word.join("") + "yay ");
    }

    for(let i = 0; i < word.length; i++) {
        if(word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u") {
            return (word.join("")+ "ay ");
        }else {
            let temp = word.shift();
            word.push(temp);
        }
    }
}

function createPigLatinSentence() {
    let string;
    string = document.getElementById("input").value;
    string = string.split(" ");
    for(let i = 0; i < string.length; i++) {
        string[i] = createPigLatinWord(string[i]);
    }
    string = string.join(" ");
    document.getElementById("output").textContent = string;
}
