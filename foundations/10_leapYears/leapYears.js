const leapYears = function(year) {
    if (divisibleByFour(year) && !divisibleByHundred(year) ||
        divisibleByFourHundred(year)){
        return true;
    } else {
        return false;
    }
};

function divisibleByFour(num) {
    return num%4===0;
}
function divisibleByHundred(num) {
    return num%100===0;
}
function divisibleByFourHundred(num) {
    return num%400===0;
}
// Do not edit below this line
module.exports = leapYears;
