const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear()
    , oldest = [0,0];
    people.forEach((element, key) => {
        element['age'] = 'yearOfDeath' in element ? element['yearOfDeath'] - element['yearOfBirth'] : currentYear - element['yearOfBirth'];
        if(element['age'] > oldest[1]){
            oldest[0] = key;
            oldest[1] = element['age'];
        }
    });
    return people[oldest[0]];
};

// Do not edit below this line
module.exports = findTheOldest;
