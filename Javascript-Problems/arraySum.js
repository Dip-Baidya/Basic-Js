
function arraySum(numbers) {
    var sum = 0;
    for (var i = 00; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;

}

var numbers = [45, 55, 66, 77, 88, 99, 35, 22];
var result = arraySum(numbers);
console.log("Total Sum Of an Array:", result);

