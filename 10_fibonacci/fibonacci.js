const fibonacci = function(fib) {
    fib = parseInt(fib)
    if(fib<=0){
        return "OOPS";
    }else if(fib < 3){
        return 1
    }else{
    let a = 1, b = 1, fibNum = 0;
    for(let i = 3; i<= fib; i++){
        fibNum = a + b;
        a = b;
        b = fibNum;
    
    }
    return fibNum
}
}


// Do not edit below this line
module.exports = fibonacci;
