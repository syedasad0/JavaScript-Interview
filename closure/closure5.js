//Advantages of Closure
//Used in Module Patterns, function curring, used in some HOF, Helps in Data Hiding and Encapsulation

//Data Hiding and Encapsulation: Other functions or other part of program do not have access to a particular data
//Example of Data Hiding and Encapsulation

// var count = 0; //Here count variable can be used by anyone in the code, to achieve encapsulation we have hid this variable inside a function
// function incrementCounter() {
//     count++;
// }

function counter() {
    var count = 0; //Here counter variable is inside the counter function
    function incrementCounter() {
        count++;
        console.log('count: ', count);
    }
    return incrementCounter
}

//console.log('counter:', count) //returns reference error
var counter1 = counter();
counter1();
counter1();
//It will create a completely new counter and forms a new closure with count value = 0
var counter2 = counter();
counter2();
 