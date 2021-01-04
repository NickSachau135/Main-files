let Principal = Number(prompt("What is the starting amount?"));
let Rate = Number(prompt("What is the rate in percent?"));
let Time = Number(prompt("what is the amoun of time in years?"));

let amount = Principal*(1 + (Rate/100)*Time);
console.log(`The final amount is $${amount.toFixed(2)}`);