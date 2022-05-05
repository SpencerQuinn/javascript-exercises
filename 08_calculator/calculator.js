const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((x,y) =>{
    return y += x
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((x,y) =>{
    return y *= x
  }, 1)

};

const power = function(n1, n2) {
	return n1 ** n2
};

const factorial = function(num) {
  result = 1;
  while (num >= 1){
    result *= num
    num--
  }
	return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
