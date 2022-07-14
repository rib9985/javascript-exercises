const leapYears = function(x) {
    
    const year = x
    if (year % 400 ==0){return true};
    if (((year % 4 == 0) && (year % 100 !== 0))){return true};
    return false

};

console.log(leapYears(1984))

// Do not edit below this line
module.exports = leapYears;
