getName();
console.log(x); //variable and function declared on top before initialisation
console.log(getName);
console.log(getName2);
console.log(getName3);

// getName2();
// getName3();

var x =10; //this gives undefined while commenting this line results in an error: not defined. and in javascript undefined and not defined are not same.
function getName(){
    console.log("Hello World");  //this function will be treated as function
}

var getName2 = () =>{
    console.log('Hello from getName2 function') //however this arrow function will be treated as a variable

}

var getName3 = function () {
    console.log('Hello from getName3') //this will also be treated as variable
}