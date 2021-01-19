let initial = Number(prompt("What is the initial value?"));
let ratio = Number(prompt("What is the ratio?"));
let n = prompt("What is n?");

let value = (initial * (ratio**(n-1)));

console.log(`The value will be ${value}`);