const ftoc = function(fahrenheit) {
  let celsius = Math.round(((fahrenheit - 32)*.5556)*10)/10
  return celsius
};


const ctof = function(celsius) {
  let fahrenheit = Math.round(((celsius*1.8)+32)*10)/10
  return fahrenheit
};



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
