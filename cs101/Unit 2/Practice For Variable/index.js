let input1 = NaN;
let input2 = NaN;

console.log(`Comparing ${input1} ( ${typeof(input1)} ) and ${input2} ( ${typeof(input2)})`);
console.log(`When compared with == is ${input1 == input2}`);
console.log(`When compared wtih === is ${input1 === input2}`);
console.log(`When compared with object.is is  ${Object.is(input1, input2)}`);