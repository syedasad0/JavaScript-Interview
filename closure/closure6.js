//Function Constructor in Javascript


function Counter(){
    let count =0;
    this.incrementCounter = function(){
        count++;
        console.log('increment counter:', count);
    }
    this.decrementCounter = function(){
        count--;
        console.log('decrement counter:', count);
    }
}

var counter1 = new Counter(); //this gives access to incrementCounter and decrementCounter function (as this is constructor function use new keyword and as a cood practice use capital letter)
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();