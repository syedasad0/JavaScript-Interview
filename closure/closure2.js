
function outer(b){ //variable b also gets treated same way and forms a closure
    // let a =10;
    function inner(){
        console.log('Logging inside inner function:', a);
        console.log('Logging inside inner function:', b);

    }
    let a =10; //let, var, const won't make any difference

    return inner
}

// outer()()
const returnFuncResult = outer("Hello World");
returnFuncResult();