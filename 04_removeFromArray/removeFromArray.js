const removeFromArray = -function(...args){

const mainArray = args[0]
const filteredArray = []

mainArray.forEach((item) => {
    if (!args.includes(item)) {
        filteredArray.push(item);
    }});

    return filteredArray;
}




// Do not edit below this line
module.exports = removeFromArray;
