{
console.log(x); // undefine due to hoisting
console.log(y); //throws ReferanceError
console.log(z); //throws ReferanceError

var x = "Pw";
let y = "Skills";
const z = "!";

console.log(x); //"Pw";
console.log(y); //"Skills";
console.log(z); //"!";
}