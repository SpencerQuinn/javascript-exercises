const palindromes = function (str) {
   str = str.toLowerCase().split('').filter((x) => /[\w]+/g.test(x)).join('');
   let newStr = [...str].reverse().join('');
   return str == newStr;
};

// Do not edit below this line
module.exports = palindromes;
