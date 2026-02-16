const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr.reduce((accumalator, currentNum) => {
    return accumalator + currentNum;
  })
};

const multiply = function(num1 ,num2) {
  return num1*num2;
};

const power = function(base, exponent) {
	return base^exponent;
};

const factorial = function(num) {
  for(int = num-1; i>0; i--){
    num= num * int
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
