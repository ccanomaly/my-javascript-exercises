const convertToCelsius = function(fahrenheit) {
  /* 
  The formula to convert Fahrenheit to Celsius is
  C = (F-32)/(9/5)
  */
  return Math.round((fahrenheit-32)/(9/5));
};

const convertToFahrenheit = function(celsius) {
  /* 
  The formula to convert Celsisu to Fahrenheit is
  F = C*9/5+32
  */
  return Math.round(celsius*9/5+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
