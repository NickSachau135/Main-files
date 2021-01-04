let radius = Number(prompt('What is the radius of the cylinder in inches?'));
let height = Number(prompt('What is the height of the cylinder in feet?'));

let volFt = Math.PI * ((radius / 12) **2) * height;
let volIn = Math.PI * radius**2 * (height * 12);

console.log(`The volume of the cylinder is ${volFt} feet cubed, or ${volIn} inches cubed`);
console.log(`The volume of the cylinder rounded is ${Math.round(volFt)} feet cubed, or ${Math.round(volIn)} inches cubed`);