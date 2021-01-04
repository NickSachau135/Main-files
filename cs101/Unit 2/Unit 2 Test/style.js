let inN = Number(prompt("Enter in a number:"));
let inN_4 = inN * 4
let inN_math = Math.sign(inN);

if (inN_math == -1){
    var sign = "negative";
}else{
    var sign = "positvie";
}

console.log(`You entered ${inN}. your input is a ${typeof(inN)}, your number is a ${sign}, your number * 4 = ${inN_4}`);