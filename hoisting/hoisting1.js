/*var x =10;
function getName(){
    console.log("Hello World");
}
getName();
console.log(x);
*/

//Hoisting Example

getName();
console.log(x); //variable and function declared on top before initialisation
var x =10; //this gives undefined while commenting this line results in an error: not defined. and in javascript undefined and not defined are not same.
function getName(){
    console.log("Hello World");
}
