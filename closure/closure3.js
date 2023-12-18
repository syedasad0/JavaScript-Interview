


//If Outer function is nested inside a function

function outest(){
    let c = 20;
    function outer(b){ //variable b also gets treated same way and forms a closure
        // let a =10;
        function inner(){
            console.log('Logging inside inner function:', a);
            console.log('Logging inside inner function:', b);
            console.log('Logging variable from outest function:', c);

    
        }
        let a =10; //let, var, const won't make any difference
    
        return inner
    }
    return outer
}
    
    // outer()()
    const returnFuncResult = outest()("Hello World");
    returnFuncResult();