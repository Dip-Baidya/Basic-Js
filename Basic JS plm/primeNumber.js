function isPrime(n) {
    for (i = 2; i < n; i++){
        if (n % i == 0) {
            return 'Your number '+ n + ' Is Not a prime Number';
        }
    }
    return 'Your number '+ n +' is a prime Number';
}

var result = isPrime(4);
console.log(result);
