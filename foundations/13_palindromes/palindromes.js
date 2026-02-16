const palindromes = function (string) {
    if (filterStr(string).join("") === reverseString(string)) {
        return true;
    }
    else {
        return false;
    }

};

function reverseString(string) {
    const stringArr = filterStr(string);

    const reverseStringArr = [];
    for(let index = stringArr.length-1; index>=0; index--) {
        reverseStringArr.push(stringArr[index]);
    }
    return reverseStringArr.join("");
}

function filterStr(str) {
    const newStringArr = [...str].filter((currentLetter) => {
        if(currentLetter !== "!" && currentLetter !== "."
            && currentLetter !== "?" && currentLetter !== ","
            && currentLetter !== " "){
                return true;
            }
    })
    
    return newStringArr.map(currentLetter => {
        return currentLetter.toLowerCase();
    });
}

// Do not edit below this line
module.exports = palindromes;
