const sumAll = function(valueOne, valueTwo) {
    let sum = 0;
    if (valueOne > valueTwo){
        const tempValue = valueOne;
        valueOne = valueTwo;
        valueTwo = tempValue;
    }

    for(let i=valueOne; i<=valueTwo; i++){
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
