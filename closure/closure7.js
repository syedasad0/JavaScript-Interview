//Disadvantages of closure
//there could be overconsumption of memeory because everytime a closure is formed it consumes a lot of memeory and somethimes those closed over variables are not garbage collected till the program expires and if not handled could cause memory leakage


//Garbage Collector:  Is like a program in JS engine which freezes up unutilised memory. 

//Relation between garbage collector and closure?

function a(){
    let x =0;
    let z=10; //z is garbage collected smartly but not x (recent browsers/engines have this mechanism of smartly cleaning memory)
    function b(){
        console.log(x);
    }
    return b
}

var y = a();
//....
//...
//variable x is not being freed
y();