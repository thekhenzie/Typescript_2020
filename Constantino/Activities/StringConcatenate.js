var getCon = function (word, num) {
    var wordtemp;
    wordtemp = word;
    for (var i = 1; i < num; i++) {
        word = word + wordtemp;
    }
    return word;
};
console.log(getCon("Hi", 3));
