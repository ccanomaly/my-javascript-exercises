const repeatString = function(string, times) {
    let repeatedString = string;
    for (let i = 1; i<times; i++){
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
