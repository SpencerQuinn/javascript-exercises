const reverseString = function(string) {
    let newString = [];
    string = string.split('')
    for(let i = string.length - 1; i >=0; i--){
        newString.push(string[i])

    }
    return newString.join('')
};

// Do not edit below this line
module.exports = reverseString;
