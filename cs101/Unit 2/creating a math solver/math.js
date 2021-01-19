let sideLgth = prompt("What is the letgth of the side?");
let circleRadius = prompt("What is the radius of the circle?");

let sqArea = (sideLgth ** 2);
let sqPermiter = (sideLgth * 4);
let cubeAreaSurface = (6* (sideLgth ** 2));
let cubeVol = (sideLgth ** 3);
let circleArea = (Math.PI * (circleRadius ** 2));
let circleCircumference = (2* Math.PI * circleRadius);
let sphereAreaSurface = (4* Math.PI * (circleRadius ** 2));
let sphereVol = ((4 / 3) * Math.PI * (circleRadius ** 3));

console.log("The area of the square is: ");
console.log(sqArea);
console.log("The permiter of the square is: ");
console.log(sqPermiter);
console.log("The surface area of the cube is: ");
console.log(cubeAreaSurface);
console.log("The Volume of the cube is: ");
console.log(cubeVol);
console.log("The area of the circle is: ");
console.log(circleArea);
console.log("The circumference of the circle is: ");
console.log(circleCircumference);
console.log("The surface area of the sphere is: ");
console.log(sphereAreaSurface);
console.log("The volume of the sphere is: ");
console.log(sphereVol);

function revealAnswer() {
    document.getElementById("area").innerHTML = sqArea;
}