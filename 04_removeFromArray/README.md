# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Solution
- Define parameters of function as an array 
- Store first array element as the mainArray
- Store an empty array to output
- Loop through each item of mainArray using the forEach method -> Condition -> arguments include the item, do NOT push item to the filteredArray. 
- Return the filteredArray


```js
const removeFromArray = -function(...args){

const mainArray = args[0]
const filteredArray = []

mainArray.forEach((item) => {
    if (!args.includes(item)) {
        filteredArray.push(item);
    }});

    return filteredArray;
}

```



## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  