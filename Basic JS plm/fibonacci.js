//fibo [2] = fibo[2-1] + fibo[2-2]
//fibo [3] = fibo [3-1] + fibo[3-2]
//fibo [i] = fibo [i-1] + fibo[i-2]

function fibonacci(n) {
    var fibo = [0,1];
    for(i=2; i<=n; i++)  {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;    
}

var result = fibonacci(10);
console.log(result);
