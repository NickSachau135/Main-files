// Practice 1

let box1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
let box2 = [1, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31];
let box3 = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31];
let box4 = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31];
let box5 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

console.log(box4[box2.length-1]);

// Example 1

let arr = [1, 2, 3, 4];
console.log(`The length is ${arr.length}`);

arr[150] = 10;
console.log(`The length is ${arr.length}`);

arr.push(3);

console.log(arr[151]);

let end = arr.pop();
console.log(end);
console.log(`The length is ${arr.length}`);

end = arr.pop();
console.log(end);
console.log(`The length is ${arr.length}`);
console.log(arr);

