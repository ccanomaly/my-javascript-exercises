const reverseString = function(string) {
    let reverseStringArr = [];
    for (let i = string.length-1; i >= 0; i--){
        reverseStringArr.push(string[i]);
    }
    return reverseStringArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
