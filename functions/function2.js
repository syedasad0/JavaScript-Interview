//Anonymous Functions
//are used as a values
/*function(){ //This will give a syntax error but this function can be assigned to a value 

}*/

//Named Function Expression

let a = function named(){
    console.log('named function called');
    // console.log('named====>', named) //here you can use named function because it works as a local variable
    //Maximum call stack size exceeded error
    //console.log('named====>', named()) //calling a function which in turn calls another function and so forth, until you hit the call stack limit.

}
a();
//named(); //ReferenceError: named is not defined


//Difference between Parameters and Arguments
/*function sample(params){

}
sample(args) */

//First Class Functions
//The ability of functions to be used as values and pass to the function as argumnet and return a function from a function these all ability of functions is known as first class functions
//That's why functions are also known as 'First Class Citizens'