
//If global function is declared with a conflctiong name

function outest() {
    let c = 20;
    function outer(b) { //variable b also gets treated same way and forms a closure
        // let a =10;
        function inner() {
            console.log('Logging inside inner function:', a);
            console.log('Logging inside inner function:', b);
            console.log('Logging variable from outest function:', c);


        }
        let a = 10; //if we comment this it will go to the global variable to resolve this and will print 100

        return inner
    }
    return outer
}
let a = 100;
console.log('Logging value of a in Global Cntext', a);

// outer()()
const returnFuncResult = outest()("Hello World");
returnFuncResult();