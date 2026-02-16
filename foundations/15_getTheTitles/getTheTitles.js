const getTheTitles = function(arrBooks) {
    return arrBooks.reduce((accumalator, currentBook) => {
        accumalator.push(currentBook.title);
        return accumalator;
    },[])
};

// Do not edit below this line
module.exports = getTheTitles;
