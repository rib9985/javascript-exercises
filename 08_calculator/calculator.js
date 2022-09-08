const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
return a - b
	
};

const sum = function(a,b) {
  return a + b
};

const multiply = function(a,b) {
 return a * b
};

const power = function(a,b) {
 return a ** b
	
};

const factorial = function(a) {
	const store = a
  total = 1
for (let i = 1; i<=store; i++){
  total*=i
}
return total
}
// 5*4*3*2*1


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
