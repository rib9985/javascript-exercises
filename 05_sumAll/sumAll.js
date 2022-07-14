const sumAll = function(x,y) {

if ((x<0||y<0) || ((typeof x != typeof 1)||(typeof y != typeof 1))){
    return 'ERROR'
} 

else {
    
    if (x>y) {return loopParameters(x,y)}
    else if (y>x) {return loopParameters(y,x)}
      

        function loopParameters(initialPara, finalPara){
            let finalSum = 0
            let loopLength = (initialPara-finalPara)
            for (let i = 0; i<= loopLength; i++){
                finalSum += finalPara + i;
            } 
        return finalSum}
}
    
}



// Do not edit below this line
module.exports = sumAll;
