let dec = Number(prompt("What is your value form 0 to 255 in decimal form?")) // Decimal to be converted later;
let decForBinary = dec // To set decForBinary = dec later


let bin8;
let bin7;
let bin6;
let bin5;
let bin4;
let bin3;
let bin2;
let bin1;

if(!(decForBinary >= 128)) {
    bin8 = 0;
} else {
    bin8 = 1;
    decForBinary -= 128;
}
if(!(decForBinary >= 64)) {
    bin7 = 0;
} else {
    bin7 = 1;
    decForBinary -= 64;
}
if(!(decForBinary >= 32)) {
    bin6 = 0;
} else {
    bin6 = 1;
    decForBinary -= 32;
}
if(!(decForBinary >= 16)) {
    bin5 = 0;
} else {
    bin5 = 1;
    decForBinary -= 16;
}
if(!(decForBinary >= 8)) {
    bin4 = 0;
} else {
    bin4 = 1;
    decForBinary -= 8;
}
if(!(decForBinary >= 4)) {
    bin3 = 0;
} else {
    bin3 = 1;
    decForBinary -= 4;
}
if(!(decForBinary >= 2)) {
    bin2 = 0;
} else {
    bin2 = 1;
    decForBinary -= 2;
}
if(!(decForBinary >= 1)) {
    bin1 = 0;
} else {
    bin1 = 1;
    decForBinary -= 1;
}
// Checks if decimals are a 1 or 0 in that place to convert to binary

let valBin = (`${bin8}${bin7}${bin6}${bin5} ${bin4}${bin3}${bin2}${bin1}`);


decForBinary = dec // To set decForBinary back to the value of the input


hexa2 = decForBinary % 16;
hexa1 = Math.floor(decForBinary / 16);

if(hexa2 == 10) {
    hexa2 = "A";
}
if(hexa2 == 11) {
    hexa2 = "B";
}
if(hexa2 == 12) {
    hexa2 = "C";
}
if(hexa2 == 13) {
    hexa2 = "D";
}
if(hexa2 == 14) {
    hexa2 = "E";
}
if(hexa2 == 15) {
    hexa2 = "F";
}
if(hexa1 == 10) {
    hexa1 = "A";
}
if(hexa1 == 11) {
    hexa1 = "B";
}
if(hexa1 == 12) {
    hexa1 = "C";
}
if(hexa1 == 13) {
    hexa1 = "D";
}
if(hexa1 == 14) {
    hexa1 = "E";
}
if(hexa1 == 15) {
    hexa1 = "F";
}
if(hexa1 == 0) {
    hexa1 = ""
}
// Grabs remainders for 1st and 2nd number of hexadecimal to convert to hexadecial

let valHexa = (`${hexa1}${hexa2}`);

decForBinary = String(decForBinary)

console.log(`Decimal Value: ${decForBinary}\n
Conversion to Binary: ${valBin}\n
Conversion to Hexadecimal: ${valHexa}`);