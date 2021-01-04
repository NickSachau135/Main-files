// function numberIn(num){
//     return (13 + 4 * num);
// }

// console.log(numberIn(4));
// console.log(numberIn(10));

function word(input) {
    input = input.split("");
    for(let i = 0; i < input.length; i++) {
        if(input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u"){
            input[i] = "";
        }
    }

    let output = "";

    for(let i = 0; i < input.length; i++) {
        output += input[i];
    }

    return output;
}

console.log(word("practice"));
console.log(word("coding"));