let bytes = Number(prompt("How many bytes are there?"));

let bits = (bytes*8);
let kilobytes = (bytes/1024);
let megabytes = (kilobytes/1024);
let gigabytes = (megabytes/1024);
let terabytes = (gigabytes/1024);

console.log(`Bits: ${bits}`);
console.log(`Bytes: ${bytes}`);
console.log(`Kilobytes: ${kilobytes.toFixed(8)}`);
console.log(`Megabytes: ${megabytes.toFixed(8)}`);
console.log(`Gigabytes: ${gigabytes.toFixed(8)}`);
console.log(`Terabytes: ${terabytes.toFixed(8)}`);
