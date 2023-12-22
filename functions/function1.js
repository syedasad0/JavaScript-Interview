//Function Statement aka Function declaration
a();
function a(){
    console.log('Function a called');
}

//Function Expression
//b(); //Reference error, can not access b before initialisation
let b = function(){
    console.log('Function b called')
}
b();

//Difference between Function Statement and Function Expression
//Hoisting is different for both type of functions

