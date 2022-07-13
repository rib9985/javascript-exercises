# Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

## Code Complete!
Decided to use built-in methods. Store the string -> Split the string to each letter -> Each letter to an array -> Reverse the array -> Join the array back into a string. -> Return

Could have use a loop as well. Store the string -> Find out the string length -> Loop the length of the string, decrementing -> Each loop into a newString with each letter -> Return 

```js
const reverseString = function(str) {
    const arrayStrings = str.split("").reverse().join("");

    return arrayStrings;
};

```




You will notice in this exercise that there are multiple tests, after making the first one pass, enable the others one by one by deleting the `.skip` in front the `test.skip()` function.

## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.
