const fibonacci = function(number) {
const finalIndex = parseInt(number)
if (finalIndex===0){
    return 0
}
else if (finalIndex<0){
    return "OOPS"
}
else{
    let fiboArray= [1,1]
    for(let count= 1;count<finalIndex-1;count++){ 
        fiboArray.push((fiboArray[count]+fiboArray[(count-1)]))           
        }
        return fiboArray[finalIndex-1]
    }
    
}


// Do not edit below this line
module.exports = fibonacci;
