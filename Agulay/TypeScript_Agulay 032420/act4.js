function Act4(input) {
    var temp = 0;
    var temp2 = 1;
    var fibSum;
    var fibonacci = [];
    for (var i = 0; i < input; i++) {
        if (i == 0) {
            fibSum = temp2 + temp;
            fibonacci.push(fibSum);
        }
        else {
            fibSum = temp2 + temp;
            fibonacci.push(fibSum);
            temp = temp2;
            temp2 = fibSum;
        }
    }
    console.log(fibonacci);
}
Act4(5);
