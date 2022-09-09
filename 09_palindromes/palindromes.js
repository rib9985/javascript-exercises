const palindromes = function (string) {
const originalString = string
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g
let noCaps = originalString.toLowerCase()
let finalString = noCaps.replace(regex,"")
let reverseString = finalString.split("").reverse().join("");

return finalString===reverseString ? true:false


};
console.log(palindromes('ZZZZ car, a man, a maracaz.'))

// Do not edit below this line
module.exports = palindromes;
