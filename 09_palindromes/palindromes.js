const palindromes = function (string) {
const originalString = string
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g

let processedString = 
originalString
.toLowerCase()
.replace(regex,"");

let reverseString = processedString
.split("")
.reverse()
.join("");

return processedString===reverseString ? true:false


};

// Do not edit below this line
module.exports = palindromes;
