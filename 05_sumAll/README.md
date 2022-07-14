# Exercise 05 - sumAll

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```

## Solution: 
- Define parameters in function 
- Check if parameters are integers greater than zero or not equal to number data type. If so, return ERROR.
- Else, check which parameters is larger. Input parameters into function loopParameters and return.
    - For loopParameters: sum each iteration with the last iteration, one by one, until it reaches the end of loopLength. 


## Code: 
```js
const sumAll = function(x,y) {

if ((x<0||y<0) || 
((typeof x != typeof 1)
||(typeof y != typeof 1))){
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

```



## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop
