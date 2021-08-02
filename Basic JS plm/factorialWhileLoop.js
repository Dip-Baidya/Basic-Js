function factorial(num) {
    var i = 1;
    var fact = 1;
    while (i <= 5) {
        fact = fact * i;
        i++;
    }
    return fact;
}

var result = factorial(5);
console.log(result);
