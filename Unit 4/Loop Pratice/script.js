// Question 1


let sum = 0;

for(let i = 0; i <= 1000; i++) {
    sum = sum + i;
}
console.log(`Answer to Question 2 is: ${sum}`);


// Question 2


let sum1 = 0;

for(let i = 93; i <= 845; i+= 2) {
    sum1 = sum1 + i;
}
console.log(`Answer to Question 2 is: ${sum1}`);


// Question 3
let num = 1;

for(let i = 1; i <= 400; i++) {
    if(i % 6 == 0) {
        num *= i;
    }
}

console.log(`Answer to Question 3 is: ${num}`);


// Question 4

let input = 13;
let output = true;
for(let i = 2; i < input; i++) {
    if(input % i == 0) {
        output = false;
        break;
    }
    
}
console.log(`Answer to question 4: ${input} is ${output}`)


// Question 5
// output: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
let end = "";
main:
for(let i = 2; i <= 100; i++) {
    if(i >= 3){
        for(let j = i-1; j > 1; j--){
            if(i % j == 0 ){
                continue main;
            }
        }
        // console.log(i)
    }
    end += i + ", ";
}

console.log(`${end} is prime`);


// Question 6

let x = 4;

for(let i = x -1; i > 1; i--) {
    x = x * i;
}
console.log(`The answer to question 6 is: ${x}`);


// Question 7


let a = 18;
let b = 24;
let min = Math.min(a, b);
let d = 0;


for(let i = 1; i < min; i++){
    if (a % i == 0){
        if(b % i == 0) {
            d = i;
        }
    }
}
console.log(d);

// Qustion 8


let e = 5;
let a1 = e*2;
let string = "";
console.log(`Your input is ${e}`);

for(let i = 1; i <= e; i ++) {
    string += "*";
    console.log(string);
    if(i == e) {
        for(let j = i-1; j >= 0; j--) {
            string = string.substring(0, j);
            console.log(string);
        }
    }
}


// Qusetion 11

// make a funtion that takes a number and starts at one and then the last two numbers 

// loop that takes each number starts at 0 and adds it to the last two numbers