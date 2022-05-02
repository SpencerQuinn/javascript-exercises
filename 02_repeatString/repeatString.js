const repeatString = (string, rept) =>{
if(rept < 0) return "ERROR";
let newString = '';
for(let i = 0; i < rept; i++){
    newString += string
}
return newString
};

// Do not edit below this line
module.exports = repeatString;
