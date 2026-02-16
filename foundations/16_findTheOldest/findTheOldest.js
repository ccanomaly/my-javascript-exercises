const findTheOldest = function(arr) {
    const currentYear = 2026;
    arr.sort((a,b) => {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if (a.yearOfDeath === undefined) {
            aAge = currentYear - a.yearOfBirth;
        }
        if (b.yearOfDeath === undefined) {
            bAge = currentYear - b.yearOfBirth;
        }
        return aAge-bAge;
    })
    return arr[arr.length-1];
}


// Do not edit below this line
module.exports = findTheOldest;
