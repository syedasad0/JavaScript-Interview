function outer(){
    // let a =10;
    function inner(){
        console.log('Logging inside inner function:', a);
    }
    let a =10; //let, var, const won't make any difference

    return inner
}

// outer()()
const returnFuncResult = outer();
returnFuncResult();