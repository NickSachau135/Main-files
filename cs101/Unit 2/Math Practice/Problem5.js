var str1 = "1"
var str2 = "2"
let y1 = Number(prompt("What is y"+str1.sub()+"?")); //4
let y2 = Number(prompt("What is y"+str2.sub()+"?")); //8
let x1 = Number(prompt("What is x"+str1.sub()+"?")); //3
let x2 = Number(prompt("What is x"+str2.sub()+"?")); //6

let distance = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
console.log(`The distance between the two points is ${distance} units.`); // should print number 5