const sumAll = function(num1, num2) {
    if(typeof (num1+num2) !== 'number' || (num1 || num2) < 0) return "ERROR"
    let range = [num1, num2].sort()
    console.log(range)
    let start = range[0],
    end = range[1];
    return ((end*(end+1))/2) - ((start*(start - 1))/2)


};

// Do not edit below this line
module.exports = sumAll;
